import React, { Component } from 'react';
import bellA from "./bellA.gif";
import bellB from "./bellB.png";
class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Please Subscribe",
             sub: "Subscribe",
             imageURL:bellA
        }
    }
    styles={
        fontStyle:"italic",
        color:"blue"
      };
      Buttonchange=()=>{
          this.setState
          ({
            message: "HIT the bell icon to never miss an update",
            sub: "Subscribed" 
          });
        }
      Imagechange=()=>{
        this.setState
          ({
            imageURL:bellB,
            message: "Thank you! Happy learning!" 
          });
    }
      
    render() {
        
        return (
            <div className="App">
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p/>
                <img style={{width:"80px", height:"80px" }} src={this.state.imageURL} alt="" onClick={this.Imagechange}></img>
            </div>
        )
    }
}

export default NewComp
