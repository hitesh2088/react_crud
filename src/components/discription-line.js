import React from 'react';

const DiscriptionLine = (props) =>{
	return (<li key={props.index}>
		<input type="text" 
		name={ `discription-${ props.index }-document` }
		value={props.value}
		onChange={props.onChange}
		/>
		<button onClick={(e)=>{props.remove(props.index,e)}}>X</button>
	</li>);
}
export default DiscriptionLine;