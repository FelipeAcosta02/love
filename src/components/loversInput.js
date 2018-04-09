import React from 'react';

import { Input, Card, Button } from 'antd';

const loversInput = (props) => {
    return (
        <Card title={"Who are the lovers?"} style={{width: '90%', margin: 'auto', marginTop: '20pt'}}>
            <Input 
            id={"firstLover"} 
            size={"large"} 
            placeholder={"Enter Name"} 
            style={{marginBottom: '10pt'}}
            onPressEnter={e => document.getElementById("secondLover").focus()}/>
            <Input 
            id={"secondLover"} 
            size={"large"} 
            placeholder={"Enter Name"} 
            style={{marginBottom: '10pt'}}
            onPressEnter={e => props.loveInputHandler()}/>
            <Button 
            type={"primary"} 
            size={"large"} 
            style={{width: '100%', backgroundColor: 'red', border: '1px solid red'}} 
            onClick={e => props.loveInputHandler()}> Go! </Button>
        </Card>
    );
}

export default  loversInput