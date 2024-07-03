import '../App.css';
import Template  from '../complonents/Template';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Location from '../complonents/location';
import Locations from '../complonents/locations';

const Key = 'B8VYGp7LGn';
const baseurl = 'https://comp2140.uqcloud.net/api/';

/**
 * 
 * @returns share page
 */
function Share() {
    let {id} = useParams();
    const [jsonlist, setJsonList] = useState();
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
  
  //the date date,preview componet
  let card;
  if(jsonlist){
  let song = jsonlist.find((item)=> item.id == id)
  card = <Location name={song.name.split(":")[0]} date={song.name.split(":")[1]}></Location>
  }
  return (
    <Template>
      <main>
        <h2 class="title">Share This Sample</h2>
        {card}
        <Locations name={"UQ Lake"}></Locations>
        <Locations name={"wordies"}></Locations>
        <Locations name={"Great court"}></Locations>
        </main>
</Template>
  );
}
export default Share;
