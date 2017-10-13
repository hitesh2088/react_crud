import React from 'react';
import ReactMarkdown  from 'react-markdown';

const EachStatus= (props)=>{
	const discription = props.status.description.map((description)=>{
		return <li><ReactMarkdown source={description} /></li>;
	});
return (<li>
			<a href={"https://jira.theorchard.com/browse/"+props.status.ticket_id} >
				{props.status.ticket_id}
				</a> : {props.status.ticket_title}<br/>
            	Status : {props.status.status}<br/>
            	<ol type="a">
            	{discription}
            	</ol>
		</li>);
 

}

export default EachStatus;