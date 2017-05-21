import React from 'react';
import ReactDOM from 'react-dom';

export default class InterestsII extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            already: props.initialAlready,
            not: props.initialNot
        };
        this.handleClickAlready = this.handleClickAlready.bind(this);
        this.handleClickNot = this.handleClickNot.bind(this);
    }

    handleClickAlready(e) {
        var val = e.currentTarget.innerHTML;
        var tempAlready = this.state.already;
        delete tempAlready[tempAlready.indexOf(val)];

        var tempNot = this.state.not;
        tempNot.push(val);

        this.setState({
            already: tempAlready,
            not: tempNot
        });
    }

    handleClickNot(e) {
        var val = e.currentTarget.innerHTML;
        var tempNot = this.state.not;
        delete tempNot[tempNot.indexOf(val)];

        var tempAlready = this.state.already;
        tempAlready.push(val);

        this.setState({
            already: tempAlready,
            not: tempNot
        });
    }

    render() {
        return (
        	<div className="container">
        		<div className="row">
                    <div className="col-lg-6 tall_div">
                        <h1>Already added</h1>
                        <ul className="list-group scrollable-list">
                            {this.state.already.map(function (value, index) {
                                return <li key={index} className="list-group-item" onClick={(e) => this.handleClickAlready(e)}>{value}</li>;
                            }, this)}
                        </ul>
                    </div>
                    <div className="col-lg-6 tall_div">
                        <h1>Not added</h1>
                        <ul className="list-group scrollable-list">
                            {this.state.not.map(function (value, index) {
                                return <li key={index} className="list-group-item" onClick={(e) => this.handleClickNot(e)}>{value}</li>;
                            }, this)}
                        </ul>
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <button type="button" className="btn btn-success btn-lg btn-block">Go!</button>
                </div>
	        </div>
        );
    }

}