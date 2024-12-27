import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm = () => {
    const [userData, setUserData] = useState({ username: "", password: "" });
    const { login } = useActions();
    const { isLoading, error } = useTypedSelector(state => state.authReducer);

    const submit = () => {
        login(userData.username, userData.password);
    }

    const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, username: event.target.value });
    }

    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, password: event.target.value })
    }

    return (
        <Form onFinish={submit}>
            { error && <div className="cRed">{error}</div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required()]}
            >
                <Input value={userData.username} onChange={changeUsername} />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required()]}
            >
                <Input value={userData.password} onChange={changePassword} />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
