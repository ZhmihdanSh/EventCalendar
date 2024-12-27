import React, {FC, useEffect, useState} from 'react';
import {Button, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import {IEvent} from "../models/IEvent";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { guests, events } = useTypedSelector(state => state.eventReducer);
    const user = useTypedSelector(state => state.authReducer.user);
    const { fetchGuests, createEvent, fetchEvents } = useActions();

    useEffect(() => {
        fetchGuests();
        fetchEvents(user.username);
    }, []);

    const addNewEvent = (event: IEvent) => {
        createEvent(event);
        setModalVisible(false);
    };

    return (
        <Row justify="center" align="middle" className="h100">
            <EventCalendar events={events}/>
            <Row justify="center">
                <Button onClick={() => setModalVisible(true)}>
                    Добавить событие
                </Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm guests={guests} submit={addNewEvent} />
            </Modal>
        </Row>
    );
};

export default Event;
