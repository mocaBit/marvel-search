import { setCharacters, startSearch, endSearch } from './actions/menu';
import { store } from '../configureStore';
import md5 from 'md5';

const parameters = {
  publicKey : '4e772d3390c42e2a084c1f0d32b37768',
  privateKey : 'e2855e5d88fbab50603a95f8c15e6643a069fa95',
  ts : '1',
  limit : '10',
  baseURI : 'https://gateway.marvel.com:443/v1/public/characters?'
};

// creamos un pequeño cliente para un api
const api = {
  characters: {
    async search(query, action) {
        //Init request
        store.dispatch(startSearch(query));
        const { publicKey, privateKey, ts, limit, baseURI } = parameters;
        const hash = md5(ts+privateKey+publicKey);
        const resourseURI = `${baseURI}nameStartsWith=${query}&limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const response = await fetch(resourseURI, { method: 'GET' });
        const {data} = await response.json();
        //End search        
        store.dispatch(endSearch());
        return store.dispatch(setCharacters(data.results));
    }
  }
};

export default api;