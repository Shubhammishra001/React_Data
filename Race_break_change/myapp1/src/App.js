import react,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import File1 from './ClassFunction/File1';

import Test from './ClassFunction/Test';

class App extends Component{  
  constructor(){
    super();
    this.state={
      data:"A"
    }
  }
  fun(){
    
    this.setState({data:" ABC "});
  }
  render(){
 return( 
         
      <div className='App'>
      <Test></Test>
      <File1></File1>  
      <h1> {this.state.data} nice </h1>
      <button onClick={()=>this.fun()}> button </button>
      </div>
    );
  }
} export default App;
