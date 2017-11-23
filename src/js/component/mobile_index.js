import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal
} from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component{
	render(){
		return(
			<div>
				<MobileHeader></MobileHeader>
				<Tabs>
					<TabPane tab="HeadLine" key="1">

					</TabPane>
					<TabPane tab="Society" key="2">

					</TabPane>
					<TabPane tab="Local" key="3">

					</TabPane>
					<TabPane tab="International" key="4">

					</TabPane>
					<TabPane tab="Entertainment" key="5">

					</TabPane>
				</Tabs>

				<MobileFooter></MobileFooter>
			</div>
			)

	}

};
