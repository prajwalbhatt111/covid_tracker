import { useState } from "react"
import Data from "./Data";
import "./Inputstyles.css"
function Input(){
   const[country,setCountry]=useState("");
   const[totalrecovered,setTotalrecovered]=useState(0);
   const[todaycases,setTodaycases]=useState(0);
   const[totaldeath,setTotaldeath]=useState();
   const[totalactive,setTotalactive]=useState();
   const[casesper,setCasesper]=useState();

const coviddata=(country)=>{
    
    const api=`https://disease.sh/v3/covid-19/countries/${country}`

    fetch(api)
    .then((data)=>data.json())
    .then((resp)=>{
        console.log(resp)
setCountry(resp.country)
setTotalrecovered(resp.recovered)
setTodaycases(resp.todayCases)
setTotaldeath(resp.todayDeaths)


    }

    
    
    
    
    )
    .catch((error)=> console.log(error));

}
    const getdata=()=>{
        let country=document.getElementById('inpu')
        coviddata(country.value)


    }
    return(
        <>
        <div className="main">
            <div className="inp">
                    <div className="input">
                        <input type="text" id="inpu" />
                    </div>
                    <div className="button">
                        <input type="button" value="Search" id="searchbutton" onClick={getdata} />
                    </div>

                  

            </div>

            <Data  country={country} recovered={totalrecovered} today={todaycases}/>


        </div>

   
        
        </>
    )
}
export default Input;