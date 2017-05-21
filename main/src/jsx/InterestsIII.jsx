import React from 'react';
import ReactDOM from 'react-dom';

export default class InterestsIII extends React.Component {

    render() {
        return (
            <div className="container">
                <h1 className="head">Pick out the places you want to visit</h1>
                <ul className="list-group scrollable-list">
                    <li className="list-group-item">Cras justo odio<label className="btn btn-primary disabled"><input type="checkbox" checked autocomplete="off">Confirm</input></label></li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        );
    }

}
