import React, { Component } from "react";

class file1 extends Component{

//   constructor(){
//     super();
//     this.state={data:"shubham"}
//      }

fun1(){
    
  this.setState({data:" ABC in file 2 "});
}
     render(){ 
      //const {portal} = this.props;
      //alert(" props = "+{this.portal});
    return (
      <div> 
      <button onClick={()=>this.fun1()}> for file2 data</button>
      <h1>---------------------------------------------------</h1>
      </div>
      );
}
}export default file1;