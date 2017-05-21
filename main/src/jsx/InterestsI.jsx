import React from 'react';
import ReactDOM from 'react-dom';

export default class InterestsI extends React.Component {

    render() {
        return (
        	<div className="container">
        		<h1 className="display-1">What are you interested in?</h1>
        		<br></br>
        		<div className="row">
        			<div className="col-lg-6 tall_div">
						<button type="button" className="btn btn-primary btn-lg btn-block fill"><h2	>Enter my interests manually</h2></button>
					</div>
					<div className="col-lg-6 tall_div">
						<button type="button" className="btn btn-info btn-lg btn-block fill"><img src="../assets/google.png" className="img-rounded" alt="Google" width="304" height="236"></img><br></br><h2>Sign in with Google to<br></br>detect my interests</h2></button>
					</div>
        		</div>
	        </div>
        );
    }

}