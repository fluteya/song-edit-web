import '../App.css';
import Template  from '../complonents/Template';
import { Link } from "react-router-dom";
import Song from '../complonents/song';
import { useState } from "react";
import { useEffect } from "react";

const Key = 'B8VYGp7LGn';
const baseurl = 'https://comp2140.uqcloud.net/api/';

/**
 * 
 * @returns homescreenpage
 */
function Homescreen() {
  const [jsonlist, setJsonList] = useState([]);
  //fecth from api
  useEffect(() => {
    async function fetchData() {
      try {
        const url = `${baseurl}sample/?api_key=${Key}`;
        const response = await fetch(url);
        const data = await response.json();
        setJsonList(data);
      } catch (error) {
        console.error('', error);
      }
    }

    fetchData();
  }, []);
  return (
    <Template>
      <main>
        <h2 class="title">My Songs</h2>
        {jsonlist ? (
          jsonlist.map((music) => (
            <Song
              name={music.name.split(":")[0]}
              date={music.name.split(":")[1]}
              id={music.id}
            ></Song>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <div class="create-card">
          <Link class="full-button" to = {"/Createsample/Create"}>
            Create Sample
          </Link>
        </div>
    </main>
    </Template>
  );
}
export default Homescreen;
