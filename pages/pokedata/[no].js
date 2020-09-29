import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Header from '../../components/header'
import SampleLine from '../../components/exam-graph'
import Status from '../../components/exam-graph2.tsx'


const Pokedata = props => (
    console.log("ssssssss"),
  <>
      <Header />
      <main>
          <div className = "slide">
              <h1>No.{props.pokedata.no} {props.pokedata.name}</h1>
              <Link href="/pokedata/[no]" as={`/pokedata/${props.pokedata.no - 1}`}>
                <div className='prev'>
                          <img src="/images/prev.png" />
                </div>
              </Link>
              <div className = "img-box">
                  <div className = "poke-img">
                      <img src = {props.str}/>
                  </div>
                
              </div>
              <div className = "poke-status">
              <table>
                  <tr>
                  <th>タイプ</th><td>{props.pokedata.types}</td>
                  </tr>
                  <tr>
                  <th>特性</th><td>{props.pokedata.abilities}</td>
                  </tr>
                  <tr>
                  <th>夢特性</th><td>{props.pokedata.hiddenAbilities}</td>
                  </tr>
                  

              </table>
              </div>
              <Link href="/pokedata/[no]" as={`/pokedata/${props.pokedata.no + 1}`}>
                <div className='next'>
                  <img src="/images/next.png" />
                </div>
              </Link>

              <Status 
                str="種族値"
                sp={props.pokedata.stats.speed}
                sD={props.pokedata.stats.spDefence}
                sA={props.pokedata.stats.spAttack}
                de={props.pokedata.stats.defence}
                at={props.pokedata.stats.attack}
                hp={props.pokedata.stats.hp}
              />
              
          </div>
          
      </main>
    
    <Link href="../main/search">
      <a>Home</a>
    </Link>

    <style jsx>{`
      .slide {
        margin : 0 auto;
        border: 1px ;
        width: 820px;
      }

      .prev{
        display: inline-block;
        cursor: pointer;
      }

      .next{
          display: inline-block;
          cursor: pointer;
      }

      .poke-img {
        text-align : center
      }

      .poke-img img{
        width: 300px;
        height: 300px;
      }

      .img-box{
        display: inline-block;
        border: 5px ;
        background-color: #e0ffff;
        width: 40%;
      }

      .poke-status{
        display: inline-block;
        width: 45%;
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
);

Pokedata.getInitialProps = async function (context) {
  const { no } = context.query;
  // 選択した都道府県の天気情報をAPIから取得する
  const response = await fetch(`http://localhost:896/api/pokedata?no=${no}`);
  const pokedata = await response.json();
  console.log(`Fetched pokedata: ${pokedata.no} ${pokedata.name}`);
  const str = `/pokedot/${no}.png`;
  console.log(`${pokedata.hiddenAbilities}`);
  //const hiddenAb = pokedata.hiddenAbilities;

  if(pokedata.hiddenAbilities == ""){
    pokedata.hiddenAbilities = "-";
    console.log("夢特性ないよ");
  }
  return { 
    pokedata,
    str
  };
};
export default Pokedata;