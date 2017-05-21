import React from 'react';
import ReactDOM from 'react-dom';
import MapSidebarElement from './MapSidebarElement.jsx';

export default class MapSidebar extends React.Component {

    render() {
        return (
            <div className="mapSidebar">
                {this.props.tripLists.map(function (listValue) {
                    return <MapSidebarElement locList={listValue} />;
                })}
            </div>
        );
    }

}
