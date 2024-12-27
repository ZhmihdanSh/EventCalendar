import React, {FC, useState} from 'react';
import {rules} from "../utils/rules";
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Dayjs} from "dayjs";
import {parseDate} from "../utils/parseDate";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
    const user = useTypedSelector(state => state.authReducer.user);
    const [event, setEvent] = useState<IEvent>({
        guests: [],
        date: '',
        description: '',
        author: '',
    });

    const selectGuests = (value: string[]) => {
        setEvent({ ...event, guests: value });
    }

    const enterDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent({ ...event, description: e.target.value });
    }

    const enterDate = (date: Dayjs) => {
        if (date) {
            const parsedDate = parseDate(date.toDate());
            setEvent({ ...event, date: parsedDate });
        }
    }

    const submitForm = () => {
        const newEvent: IEvent = {
            ...event,
            author: user.username,
        }

        submit(newEvent);
    }

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input value={event.description} onChange={enterDescription} />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required(), rules.isDateAfter()]}
            >
                <DatePicker onChange={enterDate} />
            </Form.Item>
            <Form.Item
                label="Выберите гостей"
                name="guests"
                rules={[rules.required()]}
            >
                <Select
                    mode="multiple"
                    value={event.guests}
                    onChange={selectGuests}
                >
                    {guests.map(guest => <Select.Option key={guest.username}>{guest.username}</Select.Option>)}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
