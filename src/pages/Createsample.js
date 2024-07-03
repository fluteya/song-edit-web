import '../App.css';
import Template  from '../complonents/Template';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Bars from "../complonents/bars"
import Input from '../complonents/input';
import { instrument_type } from '../complonents/bars';
import { getInputContent } from '../complonents/input';
import { useState } from "react";
import { useEffect } from "react";
import Preview from '../complonents/preview';



const Key = 'B8VYGp7LGn';
const baseurl = 'https://comp2140.uqcloud.net/api/';

let data = [
	{"B": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
	{"A": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
	{"G": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
	{"F": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
	{"E": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
	{"D": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]},
	{"C": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]}
]   //default data   

/**
 * 
 * @data the output of json fected in array format
 * @returns sorted data in A,B,C order
 */
function sortedData(data) { 
const letters = ["A", "B", "C", "D", "E", "F", "G"];//user this array to sort main json array
return(
letters.map(letter => {
  const item = data.find(obj => obj[letter]);
  return { [letter]: item[letter] };
}))
}
/**
 * 
 * @keys:the whole json data 
 * @returns : the componet of bars of the song
 */
function bars(keys){
  return(keys.map((key)=><Bars type={"bars"} name= {Object.keys(key)[0]} row = {Object.values(key)[0]}></Bars>))
}

let softedarr;//global var, will exported in bar.js

/**
 * 
 * @returns sample page
 */
function Createsample() {
  let dataarr;//used for store json data in array form
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

//check if it is create file page or edit page, then show the input bar component,this happne many times
let input
if(id == "Create" ) {
    input = <Input content={""}></Input>;
  } else{
    if(jsonlist) {
      let contentt = jsonlist.find(item => item.id == id).name.split(":")[0]
      input = <Input content={contentt}></Input>
  }
}

//this is instrument header
let Instrument
if(id == "Create") {
  Instrument = <Bars type="instrument" instrument="Pinao"></Bars>
} else{
  if(jsonlist) {
    Instrument = <Bars type="instrument" instrument={jsonlist.find(item => item.id == id).type}></Bars>
  }
}

//this bars of song
let rows;
if(id == "Create") {
  softedarr = sortedData(data)
  rows = bars(softedarr)
} else {
  if(jsonlist)
  {
    let data1 = jsonlist.find(item => item.id == id).recording_data
    dataarr = JSON.parse(data1);
    softedarr = sortedData(dataarr);
    rows = bars(softedarr);
  }
}

/**
 * upload function for save, handle post and put menthod, but when it return back homescreen the position may move
 */
async function upload() {
let today = new Date();
let date = today.getDate()
let month = today.getMonth() + 1;
var year = today.getFullYear();
let data = {
  'type':instrument_type,
  'name':`${getInputContent()}:${year}/${month}/${date}`,
  'recording_data':JSON.stringify(softedarr),
  'api_key':"B8VYGp7LGn"
}
if(id == "Create") {
  let url = `${baseurl}sample/?api_key=${Key}`
  const response = await fetch(url,{
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()
  console.log(json)
} else {
  let url = `${baseurl}sample/${id}/?api_key=${Key}`
  const response = await fetch(url,{
    method: "PUT",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await response.json()
}
}

return (
    <Template>
        <main>
            <h2 class="title">Edit Sample:</h2>
            <form class="card edit-card">
            {input}
            <div class="button-group-container">
            <Preview></Preview>
            <Link class = "bright-button" to = {"/"} onClick={upload}>save</Link>
                </div>
            </form>
              {Instrument}
       
       {rows}

    </main>
    </Template>
  );
}
export default Createsample;
export {softedarr};



