import React from 'react';
import ReactDOM from 'react-dom';

export default class LogisticsI extends React.Component {

    render() {
        return (
        	<div>
	        	<div className="container">
	        		<h1 className="display-1">Enter some logistical details</h1>
	        		<br></br>
	        		<h2 className="display-2">When are you looking to go?</h2>
		        	<div className="row">
			        	<div className="col-lg-6">
				            <div className="input-group">
							  <span className="input-group-addon" id="basic-addon1">Start Date</span>
							  <input type="text" className="form-control" placeholder="MM/DD/YYYY" aria-describedby="basic-addon1"></input>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="input-group">
							  <span className="input-group-addon" id="basic-addon2">End Date</span>
							  <input type="text" className="form-control" placeholder="MM/DD/YYYY" aria-describedby="basic-addon2"></input>
							</div>
						</div>
					</div>
					<br></br>
					<h2 className="display-2">What is the budget looking like?</h2> 
					<div className="row">
			        	<div className="col-lg-6">
				            <div className="input-group">
							  <span className="input-group-addon" id="basic-addon3">Lower Budget Limit</span>
							  <input type="text" className="form-control" placeholder="10" aria-describedby="basic-addon1"></input>
							  <span className="input-group-addon" id="basic-addon4">$</span>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="input-group">
							  <span className="input-group-addon" id="basic-addon5">Upper Budget Limit</span>
							  <input type="text" className="form-control" placeholder="10,000" aria-describedby="basic-addon2"></input>
							  <span className="input-group-addon" id="basic-addon6">$</span>
							</div>
						</div>
					</div>
					<br></br>
					<h2 className="display-2">How many people are going?</h2> 
					<div>
			            <div className="input-group">
						  <span className="input-group-addon" id="basic-addon7">Number of People</span>
						  <input type="text" className="form-control" placeholder="1" aria-describedby="basic-addon1"></input>
						</div>
					</div>
					<br></br>
					<h2 className="display-2">How many places do you want to visit per day?</h2> 
					<div className="row">
						<div className="col-lg-6">
							<div className="input-group">
							  <span className="input-group-addon" id="basic-addon8">Places per day</span>
							  <input type="text" className="form-control" placeholder="3" aria-describedby="basic-addon2"></input>
							</div>
						</div>
						<div className="col-lg-6">
							<p><em>The more places you visit, the less time you should plan on spending at each place.</em></p>
						</div>
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
