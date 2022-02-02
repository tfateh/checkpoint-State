import React, { Component } from 'react';

export default class ProfilCard extends Component {
    constructor(props){
    super(props)
    this.state=({timer:0})
    }

componentDidMount() {
    setInterval(() => {
        this.setState({timer:this.state.timer+1})
    }, 1000);
}
render(){
return (

    <div style={{color:"black",border:"solid 2px rgb(237, 215, 123)",borderRadius:"7px", width:"360px", textAlign:"center", fontStyle:"italic",fontSize:"12px"}}>
        <img src='https://kazeistore.files.wordpress.com/2018/09/pile-face3.jpg' style={{width:"250px"}}/>,
        <h1>lastName:Soufi</h1>,
        <h1>Bio:né en 1979 dans une petite village</h1>,
        <h1> Profession:ingenieur génie Civil</h1>,
        <h3> {this.state.timer} </h3>
        </div>
)
}
}
