import React,{useState} from 'react'
import { Container } from 'semantic-ui-react'
export const Titlepage=(props) => {
        const [day, setday] = useState("");
        const [month, setmonth] = useState("");
        const [year, setyear] = useState("");
        console.log(day);
        console.log(month);
        console.log(year);
        function dateUpdate(){
          var dateupdate= year+"-"+month+"-"+day;
          console.log(dateupdate);
          props.setDate(dateupdate);
        }
        return(
        <div>
          <div style={{backgroundColor:"orange"}}><h1 style={{textAlign:"left",marginLeft:"10px"}}>New Schedule - Step1</h1></div>  
        <div style={{paddingTop:"30px",paddingLeft:"65%"}}><button onClick={()=>{props.setTitle(); dateUpdate()}} class="ui primary button">Next</button></div>
        <form class="ui form"><div class="field"><label style={{marginRight:"85%",marginLeft:"30px",fontSize:"18px"}}>Title</label>
        <input onChange={(e)=>{props.settitle(e.target.value)}} style={{padding:"10px",width:"85%"}} placeholder="Title" /></div>
        
        <div style={{marginRight:"85%",marginLeft:"30px",fontSize:"18px",marginBottom:"10px",fontWeight:"bold"}}>Date</div>
        <div style={{marginLeft:"5%",marginRight:"5%"}} className="ui three column grid">
        <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>Day</label>
            
            
             <input onChange={(e)=>{ setday(e.target.value)}} type="text" placeholder="DD"/></div>

             <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>Month</label>
        
             <input onChange={(e)=>{ setmonth(e.target.value)}} type="text" placeholder="MM"/></div>
             <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>Year</label>
            
             <input onChange={(e)=>{ setyear(e.target.value)}} type="text" placeholder="YYYY" /></div>
             </div>
             </form>
             
             </div>
             
    )
}

export default Titlepage
