import React from "react";
import { XYPlot, LineSeries,HorizontalBarSeries,XAxis, YAxis,VerticalGridLines,HorizontalGridLines} from "react-vis";


interface Props{
  str: string
}

class Status extends React.Component
{
  constructor(props:Props){
    super(props);
    this.state = {
      date: [
        { x: this.props.hp, y: 'hp' },
        { x: this.props.at, y: 'at' },
        { x: this.props.de, y: 'de' },
        { x: this.props.sA, y: 'sA' },
        { x: this.props.sD, y: 'sD' },
        { x: this.props.sp, y: 'sp' },
        
      ]
    }
  }

  data = [
    { x: this.props.sp, y: 'sp' },
    { x: this.props.hp, y: 'hp' },
    { x: this.props.at, y: 'at' },
    { x: this.props.de, y: 'de' },
    { x: this.props.sA, y: 'sA' },
    { x: this.props.sD, y: 'sD' },
    
  ];

  render(){
    const srrk = this.props.str;
    
    return(
      <>
      <div className = "race">
        <h2>{srrk}</h2>
      </div>
      <div className = "graph">
        <XYPlot width={600} height={300} yType="ordinal" color = "mediumturquoise">
          
            <VerticalGridLines />
            <HorizontalGridLines />
            
            <XAxis  style={{
              line: {stroke: '#ADDDE1'},
              ticks: {stroke: '#6b6b76'},
              text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
            }}/>
            
            <YAxis />
            <HorizontalBarSeries data={this.state.date} />
            
        </XYPlot>
        
          
          
      </div>

      <style jsx>{`
        .graph{
          padding: 10px;
        }

        .race{
          
          width: 20%;
          text-align : center
        }
        .color{
          background-color: red;
        }
      `}</style>
    </>

    )
  }

};

export default Status