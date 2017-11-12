import React from 'react';
import ReactDOM from 'react-dom';
import {Router, route, hashHistory} from 'react-router';

import PCIndex from './js/component/pc_index.js';
import 'antd/dist/antd.css';
import './css/pc.css';

export default class Index extends React.Component{
	render(){
		return(
		<PCIndex />
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('root'));
