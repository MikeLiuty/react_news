import React from 'react';
import {Row, Col} from 'antd';
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
import Pic from '../../images/mike_logo.png';
import {BrowserRouter, Route, Link} from 'react-router-dom';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component{
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userId: 0
		};
	};

	setModalVisible(value) {
		this.setState({modalVisible: value});
	};

	handleClick(e) {
		if (e.key === "register") {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			{
				this.setState({current: e.key});
			}
		}
	};

	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({userNickName: json.NickUserName, userid: json.UserId});

		});
		message.success("Congraduation, you have signed up!");
		this.setModalVisible(false);
	};

	login(){
		this.setModalVisible(true);
	};

	render() {
		const {getFieldDecorator} = this.props.form;
		const userShow = this.state.hasLogined
		?
		<Link>
			<Icon type="inbox" />
		</Link>
		:
		<Icon type="setting" onClick={this.login.bind(this)}/>

		return(
      <div id="mobileheader">
			   <header >
				     <img src={Pic} alt="Mike_Logo" />
		         <span>ReactNews</span>
						 {userShow}
			   </header>

				 <Modal title="User Center" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="Close">
					 <Tabs type="card">
						 <TabPane tab="SignUP" key="2">
							 <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
								 <FormItem label="Account Name">
									 {getFieldDecorator('r_userName')(<Input placeholder="User Name"/>)}
								 </FormItem>
								 <FormItem label="Password">
									 {getFieldDecorator('password')(<Input placeholder="Password"/>)}
								 </FormItem>
								 <FormItem label="Confirm Password">
									 {getFieldDecorator('r_confirmPassword')(<Input placeholder="Repeat Password"/>)}
								 </FormItem>
								 <Button type="primary" htmlType="submit">Sign up</Button>
							 </Form>
						 </TabPane>
					 </Tabs>
				 </Modal>
      </div>
		);
	};
};

export default MobileHeader = Form.create({})(MobileHeader);
