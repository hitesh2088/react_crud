import React from 'react';
import Discription from './discription';
import {postStatus} from '../actions/userActions';
import {connect} from "react-redux";
import { Route,Link } from 'react-router-dom';

@connect((store) => {
   console.log("ins store",store.statusReducer.fetched);
  return {
    status: store.statusReducer.status,
    error: store.statusReducer.error,
    isfetched: store.statusReducer.fetched
  }
})
export default class StatusForm extends React.Component{
	constructor(props) {
    	super(props);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.squadChange = this.squadChange.bind(this);

    	this.state = {
    		description:null,
    		squad:""
    	}
	}

	handleSubmit(e){
		e.preventDefault();
		const formData = {};
    	for (const field in this.refs) {
      		formData[field] = this.refs[field].value;
    	}
    	//console.log('-->', formData);
    	this.props.dispatch(postStatus(formData));
    	console.log(this.FormRef);
    	 this.FormRef.reset();
    	 this.setState({description:null});
    	
	}
	returnvalue(val){

		this.refs.description.value = val;
	}
	squadChange(event) {
    	this.setState({squad: event.target.value});
    	this.refs.squad.value = event.target.value;
  	}
	render(){
		let dateString;
		let newDate = new Date();  
		dateString = newDate.getDate() + "-";  
		dateString += (newDate.getMonth() + 1) + "-";  
		dateString += newDate.getFullYear();
		console.log(this.props.isfetched);
		var msg = <div className={this.props.isfetched ?"alert alert-warning":""}>{this.props.status,this.props.error}</div>;
		return (

			<form onSubmit={this.handleSubmit} ref={(el) => {this.FormRef = el}}>
					<Link to={dateString} >Todays Status</Link>
					{msg}					
			<table>
				<tbody>
					<tr>
						<td className="control-label" >Name</td>
						<td><input type='text' ref='user' /></td>
					</tr>
					<tr>
						<td>Ticket No.</td>
						<td><input type="text" ref="ticket_id" /></td>
					</tr>
					<tr>
						<td>Title</td>
						<td><input type="text" ref="ticket_title" /></td>
					</tr>
					<tr>
						<td>Ticket Status</td>
						<td><input type="text" ref="status" /></td>
					</tr>
					<tr>
						<td>Squad</td>
						<td>
							<select value={this.state.squad} onChange={this.squadChange} ref="squad" >
							<option value="">Select Squad</option>
            				<option value="PHYS">PHYS</option>
            				<option value="DIG">DIG</option>
		        			</select>
		        		</td>
					</tr>
					<tr>
						<td>Discription</td>
						<td><Discription ref="description" value={this.state.description} onChange={this.returnvalue.bind(this)}/></td>
					</tr>
				</tbody>
			</table>
			<input type="submit" value="Submit"/>
			</form>
		);
	}

}
