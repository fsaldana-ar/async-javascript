const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/'

const resolverChallenge = async () => {
    try {
        const data = await fetchData(`${API}`) 
        const personaje = await fetchData(`${API}${data.results[0].id}`) 
        const origen = await fetchData(`${personaje.origin.url}`) 

        console.log(data.info.count);
        console.log(personaje.name);
        console.log(origen.dimension);
    } catch(err) {
        console.error(err);
    }
}

console.log('Before 1');
resolverChallenge()
console.log('After 1');