import React from 'react';
import EachStatus from './each-status'

const AllStatus= (props)=>{

	const Statuseach =  props.Status.map((eachStatus)=>{

		return (<div>
					<b>Name : {eachStatus.user}</b>
					<EachStatus status = {eachStatus} />
				</div>)
	})
	return (
	<div>
		<ol>
			{Statuseach}
		</ol>
	</div>
	);
}

export default AllStatus;
