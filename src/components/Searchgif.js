import React, { useEffect, useState } from "react";
import './Searchgif.css';
import axios from "axios";
import Loader from "./Loader";

function Searchgif(){
    
    const API_KEY="yJtLtvSHqPhVWx3G35GRcko5WLgUHx88";

    const[loader,setloader]=useState("false");

    const [gif, setgif]=useState("");
    const [tag,settag]=useState("banana");

    async function fetchdata(){
        setloader(true)
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const output=await axios.get(url);
        const imageSource = output.data.data.images.downsized_large.url;
        setgif(imageSource);
        setloader(false)


    }
    
    function changeHandler(event){
       
        settag(event.target.value);
        
    }
    function clickHandler(){
        fetchdata();
    }
    useEffect(()=>{
        fetchdata();
    },[])


    
    return(
        <div className="container">
            <h1> RANDOM {tag.toUpperCase()} GIF</h1>
            {
                loader ? (<Loader/>) : <img src={gif}></img>
            }<br/>
            <input type="text" placeholder="which meme?" onChange={changeHandler}></input><br/>
            <button onClick={clickHandler} > GENERATE</button>
            
        </div>
    )
}
export default Searchgif;