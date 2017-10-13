import React from 'react';
import DiscriptionLine from './discription-line';

class Discription extends React.Component{
	constructor(props){
		super(props);
		this.state = { 
		discriptionVlaue:[]
		}
		this.add = this.add.bind(this);
	}
	add(e) {
		e.preventDefault();
		const discriptionVlaue = this.state.discriptionVlaue;
		discriptionVlaue.push("");
		this.setState({ discriptionVlaue });
	}
	addDiscription(i,e){
		//console.log(e);
		//console.log(i);
		const discriptionVlaue = this.state.discriptionVlaue;
		discriptionVlaue[i]=e.target.value;
		this.setState({discriptionVlaue});
		this.props.onChange(discriptionVlaue);
	}
	removeDiscription(id,e){
		e.preventDefault();
   		const discriptionVlaue = this.state.discriptionVlaue;
   		discriptionVlaue.splice(id,1);
		var newArray=[];
		  for (var i = 0; i < discriptionVlaue.length; i++) {
		    if (discriptionVlaue[i]!= null ) {
		      newArray.push(discriptionVlaue[i]);
		    }
		  }
		
		this.setState({discriptionVlaue:newArray });
	}
	render(){
		const discriptionlines = this.state.discriptionVlaue.map((Element, index) => {
      return (<DiscriptionLine 
      			key={ index } 
      			index={ index } 
      			value ={this.state.discriptionVlaue[index]} 
      			onChange={this.addDiscription.bind(this,index)} 
      			remove={this.removeDiscription.bind(this)}
      			/>)
    });

		return (<ul>
			{discriptionlines}
			<button onClick={this.add} >+</button>
		</ul>);
	}
}
export default Discription;