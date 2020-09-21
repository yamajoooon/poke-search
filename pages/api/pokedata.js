import pokedatas from '../../data/pokemon_data.json';

export default (req, res) =>{

    const { no } = req.query;

    if(!no) return res.status(200).json(pokedatas);

    const pokedata = pokedatas.find(pokedata => pokedata.no == no);
    res.status(200).json(pokedata);
};