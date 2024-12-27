import AppRouter from "./router/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import {useEffect} from "react";
import {IUser} from "./models/IUser";
import {useActions} from "./hooks/useActions";

const user: IUser = JSON.parse(localStorage.getItem("user"));

const App = () => {
    const { setIsAuth, setUser } = useActions();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
            setUser(user)
        }
    }, []);

    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;
