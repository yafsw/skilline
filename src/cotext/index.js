import React, { createContext, useCallback, useContext, useReducer } from 'react';
import reducer from './reducer';
import initialState from './state';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleBar = useCallback(() => dispatch({ type: 'HANDLE_BAR' }), []);

    const action = { handleBar };

    return (
        <AppContext.Provider value={{state, action}}>
            {props.children}
        </AppContext.Provider>
    );
};