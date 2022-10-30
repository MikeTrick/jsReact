import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/NavBar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Videos} from "./components/Videos/Videos";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.appState.friendsBar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='profile/*'
                               element={<Profile state={props.appState.profilePage}
                                                 dispatch={props.dispatch}
                               />}/>
                        <Route path='dialogs/*'
                               element={<Dialogs
                                   state={props.appState.messagesPage}
                                   dispatch={props.dispatch}/>}/>
                        <Route path='music/*' element={<Music/>}/>
                        <Route path='news/*' element={<News/>}/>
                        <Route path='settings/*' element={<Settings/>}/>
                        <Route path='videos/*' element={<Videos/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
