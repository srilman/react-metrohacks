import React from 'react';
import ReactDOM from 'react-dom';

export default class MapSidebarElement extends React.Component {

    render() {
        return (
            <div className="expandSide">
                {this.props.locList.map(function(listValue) {
                    return <div className="locElement">{listValue}</div>;
                })}
            </div>
        );
    }

}
