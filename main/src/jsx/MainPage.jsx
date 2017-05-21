import React from 'react';
import ReactDOM from 'react-dom';

export default class MainPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    dismiss() {
        this.props.add(this.state.value);
    }

    render() {
        return (
            <div className="all">
                <div id="mainSection">
                    <h1 className="head">TripThat</h1>
                    <input type="text" className="form-control" placeholder="E.g. Boston, MA" aria-describedby="basic-addon1"/>
                    <button type="button" className="btn btn-success" onClick={this.dismiss}>Go!</button>
                </div>
            </div>
        );
    }

}
