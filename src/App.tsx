import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { store } from './redux/store';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>
    );
};
