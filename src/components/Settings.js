import React, { Component } from "react"
import Popup from "./Popup";
import Control from "./Control";
import './../css/Node.css';

class Settings extends Component {

    render(){
        return(
            <Popup name="Settings"  closeSettings={this.props.closeSettings} parentErase={this.props.parentErase}>
                <Control type="text" name="name" nameValue={this.props.name} handleChange={this.props.handleChange}/>
                <Control type="colors" name="brdColor" bdrColor={this.props.bdrColor} handleColor={this.props.handleColor}/>
                <Control type="value" name="bdrRadius" bdrRadius={this.props.bdrRadius}  handleRadius={this.props.handleRadius}/>
            </Popup>
        )
    }
    
}

export default Settings