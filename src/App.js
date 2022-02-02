
import './App.css';
import Headers from './Headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilCard from './compont/ProfilCard';
import React,{ Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show :true}
}
  render() {
  return (
    <div>
     <Headers/>,
     <div>
     {this.state.show && <ProfilCard/>},
     </div>
   
    <button onClick={()=>this.setState({show:!this.state.show})} > show | hide </button>
    </div>
    
  );
}
}
