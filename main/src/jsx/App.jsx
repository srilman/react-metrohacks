import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage.jsx'

export default class App extends React.Component {

    render () {
        return (
            <Route path="/main" component={MainPage} />
        );
    }

}
