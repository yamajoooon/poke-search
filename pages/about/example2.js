// import Head from 'next/head'
import Link from 'next/link'
// import Layout from '../../components/layout'
import React from "react";
import Header from '../../components/header'
import SampleLine from '../../components/exam-graph'
import Status from '../../components/exam-graph2.tsx'


export default function Example() {


    return (
        <>
            <Header />
            <main>
                <div className = "slide">
                    <h1>No.635 サザンドラ</h1>
                    <div className='prev'>
                        <img src="/images/prev.png" />
                    </div>
                    <div className = "img-box">
                        <div className = "poke-img">
                            <img src = "/pokelist/635.png"/>
                        </div>
                       
                    </div>
                    <div className = "poke-status">
                    <table>

                        <tr>
                        <th>タイプ</th><td>ドラゴン,あく</td>
                        </tr>
                        <tr>
                        <th>特性</th><td>ふゆう</td>
                        </tr>
                        <tr>
                        <th>夢特性</th><td>なし</td>
                        </tr>
                        
                    </table>
                    </div>
                    <div className='next'>
                        <img src="/images/next.png" />
                    </div>

                    <SampleLine />
                    
                </div>
                
            </main>
           
            <Status 
                str="種族値"
                sp={10}
                sD={20}
                sA={30}
                de={40}
                at={50}
                hp={60}
            />
            <style jsx>{`
                .slide {
                    margin : 0 auto;
                    border: 1px ;
                    width: 820px;
                }

                .poke-img {
                    text-align : center
                }

                .poke-img img{
                    width: 300px;
                    height: 300px;
                }

                .prev{
                    display: inline-block;
                }

                .next{
                    display: inline-block;
                }


                .img-box{
                    display: inline-block;
                    border: 5px ;
                    background-color: #e0ffff;
                    width: 40%;
                }

                .poke-status{
                    display: inline-block;
                    width: 40%;
                    vertical-align : top;
                    font-size: 30px;
                    padding: 0px 20px;
                    
                }
                .poke-status table{
                    border-collapse: collapse;
                    
                }

                .poke-status tr{
                    border-color: silver;
                    border-style: solid;
                    border-width: 3px 0;
                }
                .poke-status th{
                    
                    background-color: #e0ffff;
                    padding: 26px 5px;
                }
                .poke-status td{
                    padding 20px;
                    
                }


            `}</style>
        </>

    
    )
}