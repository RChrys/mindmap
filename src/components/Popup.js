import React, { Component } from "react"

class Popup extends Component {

    render(){
        return(
            <React.Fragment>
                <div className="popupOverlay"onClick={this.props.closeSettings}></div>
                <div className="popup">
                    <div className="popupHeader">
                        <div className="popupName">
                            {this.props.name}
                        </div>
                        <div className="popupOptions">
                            <button className="delete_node" onClick={this.props.parentErase}>Supp</button>
                            <button className="Close" onClick={this.props.closeSettings}>Fermer</button>
                        </div>
                    </div>
                    <div className="popupContent">
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
    
}

export default Popup