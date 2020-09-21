// import Head from 'next/head'
// import Link from 'next/link'
// import Layout from '../../components/layout'
import Header from '../../components/header'

export default function Example() {
    return (
        <>
            <Header />
            <main>
                <div className = "slide">
                    <h1>No.635 サザンドラ</h1>
                    <div className = "img-box">
                        <div className = "poke-img">
                            <img src = "/pokelist/635.png"/>
                        </div>
                       
                    </div>
                    <ul>
                        <li>type: ドラゴン・アク</li>
                        <li>特性：　ふゆう</li>
                    </ul>


                </div>
            </main>

            <style jsx>{`
                .slide {
                    margin : 0 auto;
                    border: 1px ;
                    width: 720px;
                    
                }

                .slide li{
                    font-size: 30px;
                }

                .poke-img {
                    text-align : center
                    
                }

                .poke-img img{
                    width: 300px;
                    height: 300px;
                }

                .img-box{
                    border: 5px solid black;
                    background-color: #b0c4de;
                    background-image: -webkit-gradient(linear, 0 0, 100% 100%,color-stop(.25, #F9F9F9), color-stop(.25, transparent),color-stop(.5, transparent), color-stop(.5, #F9F9F9),color-stop(.75, #F9F9F9), color-stop(.75, transparent),to(transparent));
                    -webkit-background-size: 14px 14px;
                }
            `}</style>
        </>

    
    )
}