import React, {Component} from 'react';
import './Label.css'

class Label extends Component{
    render(){
        return(
            <div className = "label1">
                <label className="label2">{this.props.Label || ''}</label>
            </div>
        );
    }
}

export default Label;