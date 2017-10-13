import React from 'react';
import AllStatus from './all-status';
import {fetchStatus} from '../actions/userActions';
import {connect} from "react-redux";


@connect((store) => {
  //console.log("ins store",store.statusReducer.users);
  return {
    status: store.statusReducer.statusList,
    error: store.statusReducer.error
  }
})
export default class StatusView extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		squad:"",
    		allStatus:{}
    	};
    	this.handleChange = this.handleChange.bind(this);
    	const isPropsChanged = false;
	}
	handleChange(event) {
    	this.setState({squad: event.target.value});
    	let data = {
			date:this.props.match.params.date,
			squad:this.state.squad
		};
		this.props.dispatch(fetchStatus(data));
  	}
 	componentWillReceiveProps(props){
 		this.isPropsChanged = true;
 		this.setState({allStatus:props.status});
 	}
	render(){
		if(this.isPropsChanged) {
			var allStatus = (<AllStatus Status = {this.state.allStatus} />); 
		}
		return (
			<div>
		 
			<div>Choose squad</div>
				<select value={this.state.squad} onChange={this.handleChange}>
					<option value="">Select Squad</option>
            		<option value="PHYS">PHYS</option>
            		<option value="DIG">DIG</option>
		        </select>
				{allStatus}
		 	</div>

			);
		
	}
}
