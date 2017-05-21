import React from 'react';
import ReactDOM from 'react-dom';

export default class MainPage extends React.Component {

    render() {
        return (
            <div className="all">
                <div id="mainSection">
                    <h1>TripThat</h1>
                    <input type="text" className="form-control" placeholder="Location Of Interest" aria-describedby="basic-addon1" />
                    <button type="button" className="btn btn-success">GO</button>
                </div>
            </div>
        );
    }

}
