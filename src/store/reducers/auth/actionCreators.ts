import {AuthActions, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../store";
import UserService from "../../../API/UserService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActions.SET_USER, payload: user}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActions.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: AuthActions.SET_ERROR, payload: error}),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActions.SET_AUTH, payload: isAuth}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const users = await UserService.getAllUsers();
            const mockUser = users.find(user => user.username === username && user.password === password);
            if (mockUser) {
                localStorage.setItem("auth", "true");
                localStorage.setItem("user", JSON.stringify(mockUser));
                dispatch(AuthActionCreators.setUser(mockUser));
                dispatch(AuthActionCreators.setIsAuth(true));
            } else {
                dispatch(AuthActionCreators.setError("Неверный логин или пароль!"));
            }
            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError("Произошла ошибка при логине."));
            dispatch(AuthActionCreators.setIsLoading(false));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUser({} as IUser));
    }
}
