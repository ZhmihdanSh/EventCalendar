import {IEvent} from "../../../models/IEvent";
import {IUser} from "../../../models/IUser";

export interface EventState {
    events: IEvent[];
    guests: IUser[];
}

export enum EventActions {
    SET_EVENTS = "SET_EVENTS",
    SET_GUESTS = "SET_GUESTS",
}

export interface SetGuestsAction {
    type: EventActions.SET_GUESTS;
    payload: IUser[];
}

export interface SetEventsAction {
    type: EventActions.SET_EVENTS;
    payload: IEvent[];
}

export type EventAction = SetEventsAction | SetGuestsAction;
