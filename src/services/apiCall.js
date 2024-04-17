
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd83c4fa56bmshf4fcacdc5a3416ap10b2d1jsnaa082e280ea2',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

export async function getSearchResults(term) {
    try {
        const url = `https://spotify23.p.rapidapi.com/search/?q=${term}&type=multi&offset=0&limit=12&numberOfTopResults=5`;
        const response = await fetch(url, options);
        const data = await response.json();
       
        const songs = await data.tracks.items

        return songs;

    } catch (error) {
        console.error(error);
    }
      
}

