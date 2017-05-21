import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

export default class MapComponent extends React.Component {
    render() {
        var thing = {lat: 59.95, lng: 30.33};
        var other = 11;
        return (
            <GoogleMapReact
                defaultCenter={thing}
                defaultZoom={other}>
                <div>Hello</div>
            </GoogleMapReact>
        );
    }
}
