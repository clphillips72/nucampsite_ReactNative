import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// const store = ConfigureStore();       //Creating the Redux store         
const store = ConfigureStore();

export default function App() {
    return (
        // This gives the Main component and its children ability to connect
        // to the Redux store
        <Provider store={store}>      
            <Main />                  
        </Provider>
    );
}
