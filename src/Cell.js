import React from 'react'
//import { pattern1 } from './data.js'



class Cell extends React.Component{
  //const props = {value: val}
  constructor(props){
    super(props)
    //exicute some code the first time this component mounts
    this.state = {
      color: this.props.value
    }
  }
  // state = {
//    color: this.props.value
//   }


  render(){
    return <div className="cell"
    style={{backgroundColor: this.state.color}}
    onClick={this.changeColor}
    ></div>
  }

  changeColor = () => {
    console.log('foo');
    this.setState({
      color: '#333'
    })
  }
}





export default Cell
