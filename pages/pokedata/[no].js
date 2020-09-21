import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Pokedata = props => (
    console.log("ssssssss"),
  <>
      <img src = {props.str}/>
      <h1>No.{props.pokedata.no}</h1>
      <h1>{props.pokedata.name}</h1>
      <p>{props.pokedata.types}</p>
      <p>{props.pokedata.abilities}</p>
      <p>{props.pokedata.stats.hp}</p>
    
    <Link href="../main/list">
      <a>Home</a>
    </Link>
  </>
);

Pokedata.getInitialProps = async function (context) {
  const { no } = context.query;
  // 選択した都道府県の天気情報をAPIから取得する
  const response = await fetch(`http://localhost:896/api/pokedata?no=${no}`);
  const pokedata = await response.json();
  console.log(`Fetched wether: ${pokedata.no} ${pokedata.name}`);
  const str = `/pokedot/${no}.png`;
  return { 
    pokedata,
    str
  };
};
export default Pokedata;