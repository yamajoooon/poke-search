import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import About from '../../components/develop/about';
import Hearder from '../../components/header';

const List = props => {
    return (
        <>
          <Hearder />
          <About />
          <ul>
            {props.pokedatas.map(pokedata => (
              <li key={pokedata.no}>
                <Link href="/pokedata/[no]" as={`/pokedata/${pokedata.no}`}>
                  <a>{pokedata.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )
};

List.getInitialProps = async function(){
  const response = await fetch('http://localhost:896/api/pokedata');
  const data = await response.json();
  console.log(data);
  // propsにwethersを設定
  return {
    pokedatas: data
  };


}

export default List



