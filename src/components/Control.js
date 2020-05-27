import React, { Component } from "react"
import boxColors from "./../data/boxcolor"

class Control extends Component {

    handleChange = (event) => {
        const {name, value} = event.target
        this.props.handleChange(name, value)
    }

    removeRadius = () => {
        this.props.handleRadius(-1)
    }

    addRadius = () => {
        this.props.handleRadius(1)
    }

    handleColor = (event) => {
        this.props.handleColor(event.target.getAttribute("value"))
    }

    render(){
        switch (this.props.type){
            case 'text':
                return(
                    <div className="bdrTextControl">
                        <input value={this.props.nameValue} name={this.props.name} onChange={this.handleChange}/>
                    </div>
                )
            
            case 'colors':
                return(
                    <div className="bdrColorsControl">
                        color
                        
                        <div className="boxColors">
                            {boxColors.map((boxColor, k) => {
                                return (
                                    <div key={k} className={"boxColor " + (this.props.bdrColor === boxColor.colorHex ? "active" : "")} style={{backgroundColor : boxColor.colorHex}} value={boxColor.colorHex} onClick={this.handleColor}></div>
                                );
                            })}
                        </div>
                    </div>
                )
            
            case 'value':
               return( 
                    <div className="bdrValueControl">
                        radius
                        <div className="radiusControls">
                            <button className="prev" onClick={this.removeRadius}>prev</button>
                            <div className="radiusValue">{this.props.bdrRadius}</div>
                            <button className="next" onClick={this.addRadius}>next</button>
                        </div>
                    </div>
                )

            default :
            return null
        }
    }
    
}

export default Control