import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

export default class MapComponent extends React.Component {

    constructor(props) {
        super(props);
        var mainLoc = this.props.mainLoc || {lat: 42.3736160, lng: -71.1097330};
        var zoom = this.props.zoom || 10;
        this.state = {
            mainLoc: mainLoc,
            zoom: zoom
        };
    }

    render() {
        var mainLoc = this.props.mainLoc;
        var zoom = 10;
        return (
            <div id="finalMap">
                <GoogleMapReact defaultCenter={this.state.mainLoc} defaultZoom={this.state.zoom}>
                    <div>Location</div>
                </GoogleMapReact>
            </div>
        );
    }
}
