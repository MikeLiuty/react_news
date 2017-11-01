import React from 'react';
import BodyChild from './bodychild';

export default class ComponentContent extends React.Component {

	constructor(){
		super();
		this.state = {Name : "Mike"};
	}


	render(){
		// setTimeout(()=>{
		// 	this.setState({Name : "Kejia"});
		// },4000);


	  return (
      <div>
        <p>{this.state.Name}{this.props.userid}</p>
        <BodyChild/>
      </div>
    );
}
  
  }

