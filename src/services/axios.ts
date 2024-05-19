import axios from 'axios';

export default axios.create({
  url: 'https://medium2.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'a70ab9036emsh7b18202f70d5bd9p16fa43jsnc8eb60512492',
    'X-RapidAPI-Host': 'medium2.p.rapidapi.com',
  },
});
