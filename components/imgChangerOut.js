import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import React, { Component } from 'react';
import { getScalePropTypesByAttribute } from 'react-vis/dist/utils/scales-utils';


const ImgChangerOut = () =>{
    return <Changer />
}
class Changer extends Component
{

    constructor(props){
        super(props);
        //const images = ['/images/image1.jpg','/images/image2.jpg','/images/image3.jpg','/images/image4.jpg','/images/image5.jpg'];
        this.state = {
            value : 0,
            current: 1,
            images: [
                     '/pokeback/pokego1.jpg',
                     '/pokeback/pokego2.jpg',
                     '/pokeback/pokego3.jpg',
                     '/pokeback/pokego4.jpg',
                    ]
        }
       
    }


    countUp(){
        if(this.state.current < 3) {
            this.setState((prevState) => ({
                  current : prevState.current + 1       // （3）
            }));      
       }else{
           this.setState({current: 0});
       }
       
    }

    componentDidMount() {                                  // （5）
        this.interval = setInterval(() => this.countUp(), 3000);
    }

    // componentWillUnmount() {                              // （6）
    //     clearInterval(this.interval);
    // }

    render(){
            
            return(
                <div>
                    <div>
                        {/* {this.imgTimer} */}
                        {/* 現在のカウント：{this.state.current} */}
                        
                    </div>
                    <div className = "image-back">
                        <img  src = {this.state.images[this.state.current]}/>
                    </div>
                    <style jsx>{`
                        .image-back img{
                            height: 360px;
                            width: 600px;
                        }
                    
                    `}</style>
                </div>
            );
        

        
    }

}


export default ImgChangerOut