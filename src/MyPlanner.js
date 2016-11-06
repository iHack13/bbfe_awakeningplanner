import React, { Component } from 'react';
import inventory from './Inventory';
import './table.css';

class MyPlanner extends Component {

    constructor(props) {
        super(props);
        this.state = this.getNewStateObject();
        this.onInventoryChange = this.onInventoryChange.bind(this);
    }

    componentDidMount() {
      inventory.addListener( this.onInventoryChange );
    }

    componentWillUnmount() {
      inventory.removeListener( this.onInventoryChange );
    }

    render() {
        var that = this;
        return (
            <tr>
                <td></td>
                {that.state.materials.map(function(count, index) {
                    return  <td key={index}>
                                <input 
                                    className="tableCell"
                                    type="number" 
                                    value={count} 
                                    readOnly
                                />
                            </td>;
                })}
                <td></td>
            </tr>
        );
    };

    getNewStateObject() {
        return {
            materials: inventory.getRequiredMaterials()
        };
    }

    onInventoryChange() {
      this.setState( this.getNewStateObject() );
    }
}

export default MyPlanner;
