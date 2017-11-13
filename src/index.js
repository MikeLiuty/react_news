import React from 'react';
import ReactDOM from 'react-dom';
import {Router, route, hashHistory} from 'react-router';
import PCIndex from './js/component/pc_index.js';
import MobileIndex from './js/component/mobile_index.js';
import 'antd/dist/antd.css';
import './css/pc.css';
import './css/mobile.css';
import MediaQuery from 'react-responsive';

export default class Index extends React.Component{
	render(){
		return(
			<div>
				<MediaQuery query='(min-device-width:1224px)'>
					<PCIndex />
				</MediaQuery>
				<MediaQuery query='(max-device-width:1224px)'>
					<MobileIndex />
				</MediaQuery>
			</div>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('root'));
