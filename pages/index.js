import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import About from '../components/about'
import Counter from '../components/counter'
import ImgChanger from '../components/imageChanger'
import Header from '../components/header'

export default function Home() {
  return (
        <div>
            <Header />
        <main>
            <Counter />
            <About />
            
            <ImgChanger />
            <div className="slide">
                <div className = "image_box">
                    <img id = "main_image" src = "/pokelist/image1.jpg"/>
                    
                </div>
                <div className = "toolbar">
                    <div className = "nav">
                        <div id = "prev"></div>
                        <div id = "next"></div>
                    </div>
                </div>
            </div>
        </main>
        <footer>JavaScriptSamples</footer>

        <style　jsx>{`
            .slide {
                margin : 0 auto;
                border: 1px solid black;
                width: 720px;
                background-color: black;
            }
            img {
                max-width: 100%;
            }
            .toolbar {
                overflow: hidden;
                text-align: center;
            }
            .nav {
                
                display: flex;
                flex-wrap:wrap;
                justify-content: center;
                align-items: center;
                padding: 16px 0;
            }
            #prev {
                margin-right: 3rem;
                width: 40px;
                height: 40px;
                background: url(/images/prev.png) no-repeat;
            }
            #next {
                margin-left: 3rem;
                width: 40px;
                height: 40px;
                background: url(/images/next.png) no-repeat;
            }
-------------------------------------------------------------------
            .header{
                width: 100%;
                background-color: #23628f;
                background-image: url(/images/pokemon_top.png) no-repeat;
                background-position: 50% 50%;
                border-top: #20567d 10px solid;
                box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
                position: relative;
                z-index: 10;
            }
            .header-contents{
                box-sizing:border-box;
                max-width: 960px;
                margin: 0 auto;
                min-height: 100px;
                background: url(/images/pokemon_top.png) no-repeat;
                background-repeat: no-repeat;
                background-position: 1px 50%;
                background-size: 20%;
            }
            .header-contents h1,
            .header-contents h2{
                margin: 0;
                color: #fff;
                line-height: 1;
            }
            .header-contents h1{
                padding: 30px 0 10px 200px;
                font-size: 24px;
            }
            .header-contents h2{
                padding: 0 0 0 200px;
                font-size: 14px;
                font-weight: normal;
            }
            .main-wrapper{
                position: relative;
                box-sizing:border-box;
                max-width: 960px;
                margin: 0 auto;
                padding:30px 30px;
                background-color: #fff;
                border-left: #dadada 1px solid;
                border-right: #dadada 1px solid;
                min-height: 80%;
                min-height: calc(100% - 200px);
            }
            .footer{
                box-sizing:border-box;
                max-width: 960px;
                margin: 0 auto 10px auto;
                padding:15px 30px;
                background-color: #23628f;
                border: #dadada 1px solid;
                border-radius: 0 0 10px 10px;
                color: #fff;
                font-size: 12px;
                text-align: right;
            }
            .a{
                color: #5e78c1;
                text-decoration: none;
            }
            .a:hover{
                color: #b04188;
                text-decoration: underline;
            }

            @media (max-width: 600px){
                .header{
                    background-position: 32% 50%;
                    border-top: #20567d 5px solid;
                }
                .header-contents{
                    min-height: 60px;
                    background-size: 40px 40px;
                    background-position: 10px 50%;
                }
                .header-contents h1{
                    padding: 15px 0 5px 55px;
                    font-size: 16px;
                }
                .header-contents h2{
                    padding: 0 0 0 55px;
                    font-size: 12px;
                }
        `}</style>
    </div>
    )

}
