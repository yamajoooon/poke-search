import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import About from '../../components/about';
import Hearder from '../../components/header';


class App extends Component {
  constructor() {
    super() 
    this.state = {
      
      items: [],
      
    }
  }

  static async getInitialProps() {
    const response = await fetch('http://localhost:896/api/pokedata');
    const data = await response.json();
    console.log(data);
    // propsにwethersを設定
    return {
        pokedatas: data
    }
  }



  componentDidMount() {
    this.setState({items: this.props.pokedatas})
  }

  filterList = (e) => {
    const updateList = this.props.pokedatas.filter(pokedata => {
      return pokedata.name.search( e.target.value) !== -1;
    })
    this.setState({items: updateList})
  }

  render() {
    return (
      <div>
            <Hearder />
            <About />
            <form action="">
                <input type="text" placeholder="search" onChange={this.filterList}/>
            </form>
            <div>
                {this.state.items.map(pokedata => {
                return (
                    // <li key={pokedata.no}>{pokedata.name}</li>
                    <li key={pokedata.no}>
                    <Link href="/pokedata/[no]" as={`/pokedata/${pokedata.no}`}>
                    <a>{pokedata.name}</a>
                    </Link>
                </li>
                )  
                })}
            </div>
      

        </div>
    );
  }
}

export default App;