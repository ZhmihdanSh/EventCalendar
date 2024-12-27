import {IUser} from "../../../models/IUser";

export enum AuthActions {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}

export interface AuthState {
    isAuth: boolean;
    user: IUser,
    isLoading: boolean,
    error: string;
}

export interface SetAuthAction {
    type: AuthActions.SET_AUTH;
    payload: boolean;
}

export interface SetUserAction {
    type: AuthActions.SET_USER;
    payload: IUser;
}

export interface SetIsLoadingAction {
    type: AuthActions.SET_IS_LOADING;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActions.SET_ERROR;
    payload: string;
}

export type AuthAction = SetAuthAction | SetErrorAction | SetIsLoadingAction | SetUserAction;
