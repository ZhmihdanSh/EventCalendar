import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "./styles/Index.css";
import {Provider} from "react-redux";
import {store} from "./store/store";

const container: HTMLElement = document.getElementById('root');

const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
