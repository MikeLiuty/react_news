import React from 'react';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import car_1 from '../../images/carousel_1.jpg';
import car_2 from '../../images/carousel_2.jpg';
import car_3 from '../../images/carousel_3.jpg';
import car_4 from '../../images/carousel_4.jpg';
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'

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
            <Col span={16} className="container">
              <div className="leftContainer">
                <div className="carousel">
                  <Carousel {...setting}>
                    <div><img src={car_1}/></div>
                    <div><img src={car_2}/></div>
                    <div><img src={car_3}/></div>
                    <div><img src={car_4}/></div>
                  </Carousel>
                </div>
                {/* <PCNewsImageBlock count={6} type="international" width="400px" cartTitle="internationalTop" imageWidth="112px"/> */}
                <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
              </div>
              <Tabs className='tabs_news'>
                <TabPane tab="news" key="1">
                  <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
                </TabPane>
                <TabPane tab="International" key="2">
                  <PCNewsBlock count={22} type="international" width="100%" bordered="false" />
                </TabPane>
              </Tabs>
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>
      );
  };
}
