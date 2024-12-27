import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Dayjs} from "dayjs";
import {parseDate} from "../utils/parseDate";

interface EventCalendarProps {
    events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({events}) => {
    const dateCellRender = (value: Dayjs) => {
        const parsedDate = parseDate(value.toDate());
        const currentDayEvents = events.filter(event => event.date === parsedDate);

        return (
            <div>
                {currentDayEvents.map((event, index) => (
                    <div key={index}>
                        {event.description}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <Calendar cellRender={dateCellRender}/>
    );
};

export default EventCalendar;
