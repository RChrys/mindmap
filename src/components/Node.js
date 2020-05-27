import React, { Component } from "react"
import Settings from "./Settings";
import { v4 as uuidv4 } from 'uuid';
import './../css/Node.css';
import LogoSettings from "./../images/settings.svg"

class Node extends Component {

    state = {
        myChild: this.props.childNodes ? this.props.childNodes : [],
        btnSettingsClicked : false,
        mouseOver : false,
        name : this.props.children ? this.props.children : "Main",
        bdrColor : this.props.bdrColor ? this.props.bdrColor : "#e97f7f",
        bdrRadius : 8
    }
    

    addChild = () =>{
        
        this.state.myChild.push({id : uuidv4(), bdrColor : this.state.bdrColor})
        this.setState({

        })
    }

    eraseChild = (child, name) => {
        this.state.myChild.splice(child,1)
        this.setState({

        })
    }

    setChild = () =>{
        this.setState({
            btnSettingsClicked : true
        })
    }

    closeSettings = () =>{
        this.setState({
            btnSettingsClicked : false
        })
    }

    changeName = (name, value) =>{
        this.setState({
            [name] : value
        })
    }

    changeRadius = (value) => {
        if(this.state.bdrRadius + value >= 0 && this.state.bdrRadius + value <= 30){
            this.setState({
                bdrRadius : this.state.bdrRadius + value
            })
        }
    }

    handleMouseOver = () => {
        this.setState({
            mouseOver : true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            mouseOver : false
        })
    }

    changeColor = (value) => {
        this.setState({
            bdrColor : value
        })
    }

    render(){
        let style = {
            border : "3px solid",
            borderColor : this.state.bdrColor,
            borderRadius : this.state.bdrRadius
        }

        return(
            <React.Fragment>
                {
                    this.state.mouseOver ? <div className="node_settings" style={style} onMouseLeave={this.handleMouseLeave} >
                        <img onClick={this.setChild} src={LogoSettings}></img><button className="add_child" onClick={this.addChild}>+</button>
                    </div> :
                    <div className="node_content" style={style} onMouseOver={this.handleMouseOver}>
                        {this.state.name}
                        <button className="add_child" onClick={this.addChild}>+</button>
                    </div>
                }
                <div className="node_children">
                    {
                        this.state.myChild.map((child,k) => {
                            let index = parseInt(`${this.props.index ? this.props.index : ""}${k+1}`)
                            return (
                                <Node 
                                    key={child.id ? child.id : k} 
                                    arrayPos={k} 
                                    index={index} 
                                    bdrColor={this.state.bdrColor} 
                                    eraseChild={this.eraseChild}
                                >
                                    {"Child "+ index}
                                </Node>
                            )                              
                         })
                    } 
                </div>
                {this.state.btnSettingsClicked ? <Settings name={this.state.name} parentErase={() => this.props.eraseChild(this.props.arrayPos,this.state.name)} closeSettings={this.closeSettings} bdrColor={this.state.bdrColor} bdrRadius={this.state.bdrRadius} handleChange={this.changeName} handleRadius={this.changeRadius} handleColor={this.changeColor}/>: null}
            </React.Fragment>
        )
    }
    
}

export default Node