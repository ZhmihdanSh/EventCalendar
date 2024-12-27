import {ComponentType} from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export enum RoutePaths {
    LOGIN = "/login",
    EVENT = "/"
}

export interface IRoute {
    path: string;
    Component: ComponentType;
    exact?: boolean;
}

export const publicRoutes: IRoute[] = [
    { path: RoutePaths.LOGIN, Component: Login, exact: true }
];

export const privateRoutes: IRoute[] = [
    { path: RoutePaths.EVENT, Component: Event, exact: true }
]
