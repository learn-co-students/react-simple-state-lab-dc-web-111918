import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, idx) => <Cell value={val} key = {idx}/>) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div className="row" key={idx}>{this.genRow(rowVals)}</div>)
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
  values : Array(10).fill(["#F00","#F00", "#F00","#F00", "#F00","#F00", "#F00","#F00", "#F00", "#F00"])
}
