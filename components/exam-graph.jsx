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
    { x: 105, y: 'at' },
    { x: 90, y: 'de' },
    { x: 125, y: 'sA' },
    { x: 90, y: 'sD' },
    { x: 98, y: 'sp' },
    
  ];

  return (
    <>
      <div className = "graph">
        <h3>種族値</h3>
        <XYPlot width={600} height={300} yType="ordinal" color = "mediumturquoise">
          
            <VerticalGridLines />
            <HorizontalGridLines />
            
            <XAxis  style={{
              line: {stroke: '#ADDDE1'},
              ticks: {stroke: '#6b6b76'},
              text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
            }}/>
            
            <YAxis />
            <HorizontalBarSeries data={data} />
            
        </XYPlot>
      </div>

      <style jsx>{`
        .graph{
          padding: 40px;
        }
        .color{
          background-color: red;
        }
      `}</style>
    </>
  );
};

export default SampleLine