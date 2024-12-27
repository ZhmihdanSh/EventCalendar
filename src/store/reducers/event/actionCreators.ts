import {EventActions, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../store";
import UserService from "../../../API/UserService";

export const EventActionCreators = {
    setEvents: (events: IEvent[]): SetEventsAction => ({ type: EventActions.SET_EVENTS, payload: events }),
    setGuests: (guests: IUser[]): SetGuestsAction => ({ type: EventActions.SET_GUESTS, payload: guests }),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const users = await UserService.getAllUsers();
            dispatch(EventActionCreators.setGuests(users));
        } catch (e) {
            console.log(e);
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch)=> {
        try {
            const events: IEvent[] = JSON.parse(localStorage.getItem("events") || "[]");
            events.push(event);
            dispatch(EventActionCreators.setEvents(events));
            localStorage.setItem("events", JSON.stringify(events));
        } catch (e) {
            console.log(e);
        }
    },
    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const allEvents: IEvent[] = JSON.parse(localStorage.getItem("events") || "[]");
            const currentUserEvents = allEvents.filter(event => username === event.author || username === event.guests.find(guest => guest === username));
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        }
        catch (e) {
            console.log(e);
        }
    }
}
