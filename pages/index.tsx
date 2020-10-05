import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Pokelink from '../components/pokelink'
import ImgChangerOut from '../components/imgChangerOut'
import { makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import  useStyles  from '../components/index.style'


export default function Home() {
  
  const classes = useStyles();
  const linkList = [
      {
          name: "ポケモン図鑑",
          image: '/images/rotoroto.png',
          link: '/main/search'
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
            <div className = {classes.Mainwrapper}>
                <div className = {classes.Main}>
                    
                    <ImgChangerOut />
                    
                    <div className={classes.lessoncontainer}>
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

            



                
        `}</style>
    </div>
    )

}

