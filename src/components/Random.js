import axios from "axios";
import React, { useEffect }  from "react";
import { useState } from "react";
import Loader from "./Loader";
import './Random.css';

function Random(){
    const[gif,setGif]=useState("");
    const API_KEY= "yJtLtvSHqPhVWx3G35GRcko5WLgUHx88";
    const[loading,setLoading]= useState(false);
    
    async function fetch(){
        setLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const output= await axios.get(url);
        
        const imageSource = output.data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false);
    }

    useEffect(()=>{
        fetch()
        }
        ,[])
    function clickHandler(){
        fetch()
    }

    return(
        <div className="container">
            <div className=" randomwala">
            
                <h2>A RANDOM GIF</h2>
                {
                    loading ? ( <Loader/>)  : ( <img src={gif}></img>)
                
                }
                <button onClick={clickHandler}>GENERATE</button>
            </div>
        </div>
    )
        
        
}
export default Random;