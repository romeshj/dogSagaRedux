import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import {submitForm} from '../redux/actions/action-creators';

import '../App.css';
class Form extends Component {
	constructor(props){
		super(props);
		console.log( " ====== FORM " , props);
		this.state = {
			fields : {
				username : ''
			}
		}
	}
	
	handleChange = (e) => {
        const {fields} = this.state;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }
	
	submitForms =(e)=> {
		e.preventDefault();
		const {fields} = this.state;
		console.log(fields)
		this.setState({
			fields:fields,
		});
	}
	  render() {
	        const { formData, onSubmitForm } = this.props;
			const {fields} = this.state;
			return(
			<div>
			    <form method="post"  name="userForm" onSubmit={(e) => {e.preventDefault(); onSubmitForm(fields.username)}}>
			     <Link to="/">Home</Link> &nbsp; 
				 {formData && formData.length ? <Link to="/welcome">Welcome Link</Link> : ''}
				 <h1>{ formData || 'Hello World!'}</h1>
				 <div>First Name : <input type="text" name="username" value={fields.username || ''} onChange={this.handleChange}/></div>
				 <button type="submit">SUBMIT</button>
				 <button type="button" onClick={()=> onSubmitForm('MY FORM DATA')}>Click Me</button>
				 </form>
			</div>
			)
		}
}

const mapStateToProps = state => {
console.log(state, " state ");
  return {
  formData: state.formreducer.formData
  };
};

const mapDispatchToProps = dispatch => {
  return {
   onSubmitForm: (data) => dispatch(submitForm(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form))
