import Head from 'next/head'
import Link from 'next/link'
import Layout from './layout'


export default function Header() {
    return (
        <>
            <Head>
                <title>ポケモン図鑑</title>
                <link rel="icon" href="/images/pokemon_7025.ico" />
            </Head>
            <Layout>
                <div className = 'header-contents'>
                    <h1>PoketMonsterIndex</h1>
                    <h2>タネ→１進化→２進化</h2>
                    
                </div>
            </Layout>

            <style jsx>{`
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

            `}
            </style>

            
        </>
    )
}