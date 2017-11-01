import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './js/component/header';
import ComponentFooter from './js/component/footer';
import ComponentContent from './js/component/content';


class Index extends React.Component{
	render(){
		return(
		<div>
			<ComponentHeader/>
			<ComponentContent userid = {123456}/>
			<ComponentFooter/>
	<bodyChild />
		</div>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('root'));