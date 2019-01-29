import React, { Component } from 'react';
import Cell from './Cell'
import { pattern1 } from './data'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => 
    <div className="Cell">
      <Cell value={val}/>
    </div>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}
Matrix.defaultProps = {
  values: pattern1.map((arr) => {
    return arr.map((hexStr) => {
      return '#f00'
    })
  })
}
