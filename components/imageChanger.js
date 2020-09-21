import React, { Component } from 'react';


const ImgChanger = () =>{
    return <Changer />
}
class Changer extends Component
{

    constructor(props){
        super(props);
        //const images = ['/images/image1.jpg','/images/image2.jpg','/images/image3.jpg','/images/image4.jpg','/images/image5.jpg'];
        this.state = {
            value : 0,
            current: 0,
            images: ['/pokelist/image1.jpg',
                     '/pokelist/image2.jpg',
                     '/pokelist/image3.jpg',
                     '/pokelist/image4.jpg',
                     '/pokelist/image5.jpg']
        
        }
    }

    changeGene = (num) =>{
        if(this.value + num >= 0 && this.value + num < images.length){
            this.value += num;
            this.setState({value: this.state.value});
        }
    }

    evolution = () =>{
        this.setState({value: this.state.value +1});
        //this.changeGene(1);
    }

    degeneration = () =>{
        this.setState({value: this.state.value -1});
        //this.changeGene(-1);
    }

    render(){
        return(
            <div>
                <div>
                    現在の画像：{this.state.images[this.state.value]}
                </div>
                <div className = "image_box">
                    <img  src = {this.state.images[this.state.value]}/>
                    
                </div>
                <div>
                    <button type="button" onClick={this.degeneration}>←←←←←←←←←←←</button>
                    <button type="button" onClick={this.evolution}>→→→→→→→→→→→</button>
                </div>
            </div>
        );

    }

}





export default ImgChanger