import React,{useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
export const Timepage=(props) => {
    const [hr, sethr] = useState("");
    const [min, setmin] = useState("");
    const [ap, setap] = useState("");
    const [hrs, sethrs] = useState("");
    const [mins, setmins] = useState("");
    const [aps, setaps] = useState("");
    const options = [
      { key: 'AM/PM', text: 'AM/PM', value: '' },
      { key: 'AM', text: 'AM', value: 'AM' },
      { key: 'PM', text: 'PM', value: 'PM' }

      
    ]
        console.log(hr);
        console.log(min);
        console.log(ap);
        console.log(hrs);
        console.log(mins);
        console.log(aps);
        function starttimeUpdate(){
        
          if(hr&&min&&ap){
            var starttimeupdate= hr+":"+min+""+ap;
            props.startTime(starttimeupdate);
    
          }
  
        }
        function endtimeUpdate(){
          if(hrs&&mins&&aps){
            var endtimeupdate= hrs+":"+mins+""+aps;
            props.endTime(endtimeupdate);
          }
         
        }
        function sanity(){
          let count=0;
          starttimeUpdate();
          endtimeUpdate();
          
        
        }
        return(
        <div>
          <div style={{backgroundColor:"orange"}}><h1 style={{textAlign:"left",marginLeft:"10px"}}>New Schedule - Step2</h1></div>  
        <div style={{paddingTop:"30px",paddingLeft:"65%"}}><button onClick={()=>{  sanity() }} class="ui primary button">Create</button></div>
        
        
        <div style={{float:"left",marginLeft:"5%",fontSize:"18px",marginBottom:"10px",fontWeight:"bold"}}>Start Time</div>
        <form class="ui form">
        <div style={{marginLeft:"5%",marginRight:"5%",width:"90%"}} className="ui three column grid">
        <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>Hr</label>
            
            
             <input onChange={(e)=>{sethr(e.target.value)}} type="text" placeholder="Hr"/></div>

             <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>Min</label>
        
             <input onChange={(e)=>{ setmin(e.target.value);}} type="text" placeholder="Min"/></div>
             <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>AM/PM</label>
            
             <Dropdown onChange={(e,data)=>{setap(data.value);}} placeholder='AM/PM' fluid selection options={options} />
             </div>
             </div>
             </form>
             <form class="ui form">
        
        <div style={{float:"left",marginLeft:"5%",fontSize:"18px",marginBottom:"10px",fontWeight:"bold"}}>End Time</div>
        <div style={{marginLeft:"5%",marginRight:"5%",width:"90%"}} className="ui three column grid">
        <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>Hr</label>
            
            
             <input onChange={(e)=>{ sethrs(e.target.value)}} type="text" placeholder="Hr"/></div>

             <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>Min</label>
        
             <input onChange={(e)=>{ setmins(e.target.value)}} type="text" placeholder="Min"/></div>
             <div style={{display:"inline-block",textAlign:"left"}} class="field column"><label>AM/PM</label>
             <Dropdown onChange={(e,data)=>{setaps(data.value);}} placeholder='AM/PM' fluid selection options={options} />
             </div>
             </div>
    
             </form>
             
             </div>
             
    )
}

export default Timepage
