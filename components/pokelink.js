import React from 'react';
import Link from 'next/link'

class Pokelink extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isModalOpen: false};
    }
    render()
    {
        return (
            <>
            <Link href = {this.props.link}>
                <div className='lesson-card'>
                    <div className='lesson-item'>

                        <p>{this.props.name}</p>
                        <img src={this.props.image} />
                    </div>
                    
                </div>
            </Link>
                <style jsx>{`

                    .lesson-card {
                        display: inline-block;
                        vertical-align: middle;
                        width: 22.5%;
                        height: 250px;
                        margin-right: 24px;
                        text-align: center;
                        box-shadow: 0 0 6px #e8e8e8;
                        background-color:  #23628f;
                        cursor: pointer;
                    }
                    
                    .lesson-item {
                        border-radius: 4px;
                        padding: 20% 0 64px;

                    }
                    
                    .lesson-item img {
                        width: 126px;
                    }

                    .lesson-item p {
                        color:  #f4fafa;
                    }
                      
                `}
                </style>
            </>
            );
    }
}

export default Pokelink
  