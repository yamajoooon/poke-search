import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import About from '../components/about'
import Counter from '../components/counter'
import ImgChanger from '../components/imgChangerHandle'
import Header from '../components/header'
import Pokelink from '../components/pokelink'
import ImgChangerOut from '../components/imgChangerOut'
import Example from '../components/pose'

export default function Home() {
  
  const linkList = [
      {
          name: "ポケモン図鑑",
          image: '/images/rotoroto.png',
          link: '/main/list'
      },
      {
        name: "公式サイト",
        image: '/images/pika.png',
        link: 'https://www.pokemon.co.jp/'
      },
      {
        name: "アプリについて",
        image: '/images/yadon.png',
        link: '/about/example2'
      }

  ]
  return (
        <div>
            <Header />
            <div className = "Main-wrapper">
                <div className = 'Main'>
                    {/* <div className = "poseposition">
                        <Example />
                    </div> */}
                    
                    {/* <Counter />
                    <About /> */}
                    <ImgChangerOut />
                    
                    {/* <ImgChanger /> */}
                    <div className='lesson-container'>
                        {linkList.map((pokeItem) => {
                        return (
                                <Pokelink
                                    name={pokeItem.name}
                                    image={pokeItem.image}
                                    link={pokeItem.link}
                                />
                            
                        );
                    })}
                    </div>
                </div>
            </div>
            
        
        <footer>JavaScriptSamples</footer>

        <style　jsx>{`
            .poseposition {
                padding: 20px 80px;
            }

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

            .lesson-container {
                margin-top: 20px;
                
            }

            .Main-wrapper {
                background-color: #f4fafa;
            }
              
            .Main {
                max-width: 1040px;
                padding: 20px 50px;
            }



                
        `}</style>
    </div>
    )

}

