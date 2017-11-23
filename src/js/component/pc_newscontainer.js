import React from 'react';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import car_1 from '../../images/carousel_1.jpg';
import car_2 from '../../images/carousel_2.jpg';
import car_3 from '../../images/carousel_3.jpg';
import car_4 from '../../images/carousel_4.jpg';

const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component{
  render(){

    const setting = {
      dots:true,
      infinite:true,
      speed:750,
      slideToShow:1,
      autoplay:true
    };

      return(
        <div>
          <Row>
            <Col span={2}></Col>
            <Col span={20} className="container">
              <div className="leftContainer">
                <div class="carousel">
                  <Carousel {...setting}>
                    <div><img src={car_1}/></div>
                    <div><img src={car_2}/></div>
                    <div><img src={car_3}/></div>
                    <div><img src={car_4}/></div>
                  </Carousel>
                </div>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
      );
  };
}
