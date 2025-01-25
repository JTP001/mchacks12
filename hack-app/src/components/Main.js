import { Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';
import Home from './Home';
import Games from './Games';

function Main() {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/games' element={<Games />} />
            </Routes>
        </Fragment>
    );
}

export default Main;