import React from 'react';
import ReactDOM from 'react-dom';
import MapComponent from './MapComponent.jsx';
import MapSidebar from './MapSidebar.jsx';

export default class MapPage extends React.Component {

    render() {
        const someVals = [["Hello", "You", "Are"], ["Something", "Nimish", "Said"], ["Cool", "Map", "Thing"]];

        return (
            <div className="page">
                <MapComponent />
                <MapSidebar tripLists={someVals}/>
            </div>
        );
    }
}
