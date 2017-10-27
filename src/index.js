import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './js/component/header';

class Index extends React.Component{
	render(){
		return(
		<div>
			<ComponentHeader/>
			<h2>Content</h2>
		</div>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('root'));