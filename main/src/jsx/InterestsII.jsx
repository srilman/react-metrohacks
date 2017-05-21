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
        this.handleGo = this.handleGo.bind(this);
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

    handleGo(e) {
        var tags = [];
        for(var i = 0; i < this.state.already.length; i++) {
            if(this.state.already[i] == "Amusement Parks") {
                tags.push("amusement_park");
            } else if(this.state.already[i] == "Aquariums and Zoos") {
                tags.push("aquarium");
                tags.push("zoo");
            } else if(this.state.already[i] == "Art") {
                tags.push("art_gallery");
                tags.push("museum");
            } else if(this.state.already[i] == "Books") {
                tags.push("book_store");
                tags.push("library");
            } else if(this.state.already[i] == "Cafes") {
                tags.push("cafe");
            } else if(this.state.already[i] == "Camping") {
                tags.push("campground");
            } else if(this.state.already[i] == "Casinos") {
                tags.push("casino");
            } else if(this.state.already[i] == "Food") {
                tags.push("bakery");
                tags.push("meal_delivery");
                tags.push("meal_takeaway");
                tags.push("restaurant");
            } else if(this.state.already[i] == "Landmarks and Monuments") {
                tags.push("establishment");
                tags.push("stadium");
                tags.push("city_hall");
                tags.push("point_of_interest");
            } else if(this.state.already[i] == "Nature") {
                tags.push("park");
            } else if(this.state.already[i] == "Nightlife and Drink") {
                tags.push("night_club");
                tags.push("bar");
            } else if(this.state.already[i] == "Recreation") {
                tags.push("bowling_alley");
                tags.push("gym");
                tags.push("gym");
            } else if(this.state.already[i] == "Relaxation") {
                tags.push("spa");
            } else if(this.state.already[i] == "Religion") {
                tags.push("church");
                tags.push("hindu_temple");
                tags.push("mosque");
                tags.push("synagogue");
                tags.push("place_of_worship");
            } else if(this.state.already[i] == "Shopping") {
                tags.push("clothing_store");
                tags.push("department_store");
                tags.push("shopping_mall");
                tags.push("jewelry_store");
            } else if(this.state.already[i] == "Technology") {
                tags.push("electronics_store");
                tags.push("hardware_store");
            }
        }

        console.log(tags);

        var s = "";
        for(i = 0; i < tags.length; i++) {
            if(i == tags.length-1) {
                s = s+tags[i];
            } else {
                s = s+tags[i]+"|";
            }
        }

        console.log(s);

        fetch('http://localhost:9000/attractions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                types:s,
                lat:40.712784,
                long:-74.005941
            })
        }).then(function(response) {
            console.log(response);
        })
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
                    <button type="button" onClick={this.handleGo} className="btn btn-success btn-lg btn-block">Go!</button>
                </div>
	        </div>
        );
    }

}