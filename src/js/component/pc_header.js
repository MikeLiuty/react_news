import React from 'react';
import {Row,Col} from 'antd';
import {Menu, Icon} from 'antd';
import Pic from '../../images/mike_logo.png';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			current: 'top'
		};
	}
	render(){
		return(
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" className = "logo" >
							<img src={Pic} alt="Mike_Logo" />
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu mode = "horizontal" selectedKeys={[this.state.current]}>
							<Menu.Item key="top">
								<Icon type="appstore"/>HeadLine
							</Menu.Item>
							<Menu.Item key="society">
								<Icon type="appstore"/>Society
							</Menu.Item>
							<Menu.Item key="local">
								<Icon type="appstore"/>Local
							</Menu.Item>
							<Menu.Item key="international">
								<Icon type="appstore"/>International
							</Menu.Item>
							<Menu.Item key="entertainment">
								<Icon type="appstore"/>Entertainment
							</Menu.Item>
							<Menu.Item key="sports">
								<Icon type="appstore"/>Sports
							</Menu.Item>
							<Menu.Item key="tech">
								<Icon type="appstore"/>Tech
							</Menu.Item>
							<Menu.Item key="fashion">
								<Icon type="appstore"/>Fashion
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	};

};
