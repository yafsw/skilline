import React, { memo, StrictMode } from 'react';
import { AppProvider } from '../cotext';
import Home from '../page/Home';

const App = () => {
    return (
        <StrictMode>
            <AppProvider>
                <Home/>
            </AppProvider>
        </StrictMode>
    );
};

export default memo(App);