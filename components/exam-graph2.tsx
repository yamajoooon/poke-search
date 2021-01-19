import React from "react";
import { XYPlot, LineSeries,HorizontalBarSeries,XAxis, YAxis,VerticalGridLines,HorizontalGridLines} from "react-vis";
import Pop from "./help-popper/popper"

interface Props{
  // str: string
  hp: number;


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
      <div className = "help-popper-place">
        <div>
          <h2>{srrk}</h2>
        </div>
        <div className = "race">
          <Pop 
            tittle = "ステータス"
            content = "上からスピード、特防、特攻、防御、攻撃、HP"
            placement = 'right-end'
            href = 'https://www.pokemon.co.jp/'
          />
        </div>
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
          padding: 20px;
        }

        .race{
          margin-top: 10px;
        }
        .color{
          background-color: red;
        }

        .help-popper-place{
          display: flex;
      }
      `}</style>
    </>

    )
  }

};

export default Status