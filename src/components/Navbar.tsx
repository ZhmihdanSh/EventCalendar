import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RoutePaths} from "../router/routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useHistory();
    const isAuth = useTypedSelector(state => state.authReducer.isAuth);
    const { logout } = useActions();
    const user = JSON.parse(localStorage.getItem("user"));

    if (isAuth) {
        return (
            <Layout.Header>
                <Row justify="end">
                    <div className="username">{user.username}</div>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            onClick={() => logout()}
                            key={1}
                        >
                            Выйти
                        </Menu.Item>
                    </Menu>
                </Row>
            </Layout.Header>
        )
    }

    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item
                        onClick={() => router.push(RoutePaths.LOGIN)}
                        key={1}
                    >
                        Логин
                    </Menu.Item>
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
