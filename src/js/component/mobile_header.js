import React from 'react';
import Pic from '../../images/mike_logo.png';

export default class MobileHeader extends React.Component{

	render(){
		return(
      <div id="mobileheader">
			   <header >
				     <img src={Pic} alt="Mike_Logo" />
		         <span>ReactNews</span>
			   </header>
      </div>
		);
	};

};
