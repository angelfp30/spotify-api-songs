export function ListOfSongs({ searchResults }) {
    return (
      <ul className="songs">
        {searchResults.map((song, index) => {
          const artistName = song.data.artists.items[0].profile.name;
          const albumCover = song.data.albumOfTrack.coverArt.sources[0].url;

          return (            
            <li key={index} className="song">

              <img src={albumCover} alt={song.data.albumOfTrack} />

              <h2>{song.data.name}</h2>

              <h4 className="artist">{artistName}</h4>
              Play on Spotify {" "}
                <a href={song.data.uri} target="_blank">
                App {" "}
                </a>
                or {" "}
                <a href={`https://open.spotify.com/track/${song.data.id}`} target="_blank">
                  Website {" "}
                </a>

                <a
                  href={`https://genius.com/${artistName.replaceAll(
                    ' ',
                    '-'
                  )}-${song.data.name.replaceAll(' ', '-')}-lyrics`} target="_blank"
                >
                <h4>Lyrics</h4>
                </a>
            </li>
          );
        })}
      </ul>
    )
}