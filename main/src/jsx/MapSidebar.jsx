import React from 'react';
import ReactDOM from 'react-dom';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class MapSidebar extends React.Component {

    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList(list) {
        list.map(function (value, index) {
            return <ListGroupItem key={index}>value</ListGroupItem>
        });
    }

    render() {
        return (
            <div id="mapSidebar">
                {this.props.tripLists.map(function (listValue, index) {
                    return (
                        <Panel key={index} collapsible defaultExpanded header={listValue}>
                            <ListGroup fill>
                                {listValue.map(function (value, index) {
                                    return <ListGroupItem key={index}>{value}</ListGroupItem>
                                })}
                            </ListGroup>
                        </Panel>
                    );
                }, this)}
            </div>
        );
    }
}
