import {useMemo} from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Navbar} from "./components/NavBar/Navbar";
import {ROUTES_MAP} from "./common/constants/routes";
import './App.css';

const App = () => {

    const content = useMemo(() => (
        <div className='app-wrapper-content'>
            <Routes>
                {Object.entries(ROUTES_MAP).map(([path, Component]) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        </div>
    ), [])

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                {content}
            </div>
        </BrowserRouter>

    );
}

export default App;
