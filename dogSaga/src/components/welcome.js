import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import '../App.css';
class Welcome extends Component {
	constructor(props){
		super(props);
		console.log( " ====== Welcome " , props);
	}
	  render() {
	        const { formData } = this.props;
			return(
			<div>
			     <Link to="/">Home</Link>
				 <h1>Welcome { formData }</h1>
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


export default connect(mapStateToProps, null)(withRouter(Welcome))
