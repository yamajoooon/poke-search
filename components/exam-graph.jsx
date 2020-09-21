import React from "react";
import { XYPlot, LineSeries,HorizontalBarSeries,XAxis, YAxis,VerticalGridLines,HorizontalGridLines} from "react-vis";

// interface SamplePropsTypes {
//   width: number;
//   height: number;
// }

// interface DataTypes {
//   x: number;
//   y: number;
// }

const SampleLine = () => {
  const data = [
    { x: 92, y: 'hp' },
    { x: 105, y: 'attack' },
    { x: 90, y: 'defence' },
    { x: 125, y: 'spAttack' },
    { x: 90, y: 'spDefence' },
    { x: 98, y: 'speed' },
    
  ];

  return (
    <div>
      React Advent2 18th
      <XYPlot width={300} height={300} yType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries data={data} />
      </XYPlot>
    </div>
  );
};

export default SampleLine