import React, {Component} from 'react';
//import './Input.css';

/**
 *   inputLabel
 *   inputName
 *   inputType
 *   inputPlaceholder
 *   inputValue
 *   inputErrorMsg
 *   inputChangeHandler
 *   inputBlurHandler
 */

class Input extends Component{
  render(){
    var error_cmp = null;
    if (this.props.inputErrorMsg) {
      error_cmp = (<div className="error">{this.props.inputErrorMsg}</div>);
    }
    return (
    <div className="input">      
      <input
        type={this.props.inputType || 'text'}
        name={this.props.inputName || 'input' + Math.round(Math.random() * 100) }
        placeholder={this.props.inputPlaceholder || ''}
        groupname={this.props.inputGroupName || ''}
        checked={this.props.inputChecked || ''}
        value={this.props.inputValue || ''}
        onBlur={this.props.inputBlurHandler || ((e)=>{ return false;})}
        onChange={this.props.inputChangeHandler || ((e)=>{ return false;})}
      />
      <label>{this.props.inputLabel || ''}</label>
      {error_cmp}
    </div>
    );
  }
}
export default Input;
