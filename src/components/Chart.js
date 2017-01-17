// first of course react!
import React from 'react'
// require `react-d3-core` for Chart component, which help us build a blank svg and chart title.
import {Chart} from 'react-d3-core';
// require `react-d3-basic` for Line chart component.
import { LineChart } from 'react-d3-basic';

var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",

    chartSeries = [
      {
        field: 'cellCount',
        name: 'cellCount',
        color: 'green'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }

const Chartt = ({ chartData }) => (
    <LineChart
      width= {700}
      height= {300}
      data= {chartData}
      chartSeries= {chartSeries}
      x= {x}
    />
)

export default Chartt;