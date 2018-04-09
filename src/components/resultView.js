import React from 'react';

import { Card, Layout, Row, Col } from 'antd';

const resultView = (props) => {
    return(
        <Card title={"The Love View"} style={{width: '90%', margin: 'auto', marginTop: '20pt'}}>
            <div className={"heart"} style={{fontSize: '5em'}}/>
            <Row>
                <Col span={10} style={{fontSize:'3em', lineHeight: '2em'}}><p>{props.lovers.firstLover}</p></Col>
                <Col span={4} style={{fontSize:'3em', lineHeight: '2em'}}><p>+</p></Col>
                <Col span={10} style={{fontSize:'3em', lineHeight: '2em'}}><p>{props.lovers.secondLover}</p></Col>
            </Row>
            <Row>
                <Col span={24} style={{fontSize:'3em', color: 'red'}}><p>{props.lovers.loveIndex}</p></Col>
            </Row>
        </Card>
    );
}

export default  resultView