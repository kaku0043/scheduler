import React,{useEffect, useState} from 'react';

export const Trainingpage =(props) => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('https://natural-rattler-14.hasura.app/v1/graphql',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({query:`query{
                training
                {
                  id
                  title
                  date
                  startTime
                  endTime
                }
    
            }`})
    
        }).then(res => res.json()) .then((res) => { 
        setdata(res.data.training);
    });
        
    }, []);
    const monthname = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] 
    
    return (
        <div>
           <div style={{backgroundColor:"orange"}}> <h1 style={{paddingRight:"90%"}}>Schedules</h1></div>
           <div style={{paddingTop:"30px",display:"block",width:"100%"}}><button onClick={()=>{props.setTraining()}} style={{marginRight:"5%",float:"right"}} class="ui primary button">Create Schedule</button>  </div>
           <br>
           </br><br>
           </br>{console.log(data)}
           
           { data&&data.map((training)=>{
               console.log(training);
               var k = training.date.split("-")
               console.log(k);
               return(
                <div className="ui two column grid" style={{ width:"90%",border:"1px solid black",borderRadius:"10px",paddingBottom:"20px",marginLeft:"5%",marginRight:"5%",marginTop:"20px"}}>
             <div style={{width:"100px",marginRight:"5px",border:"1px solid black",position:"relative",backgroundColor:"orange",height:"80px",top:"10px",left:"10px",bottom:"10px"}}>
             <div style={{position:"absolute",margin:"25px 22px 25px 25px",height:"2px",top:"2px",left:"2px",right:"2px",fontSize:"1rem",fontWeight:"bold",textAlign:"center"}}>{k[2]} {monthname[parseInt(k[1])-1]}</div>
             </div>
             <div style={{width:"65%"}}><div style={{marginTop:"20px",textAlign:"left"}}>
             
             <p style={{fontWeight:"bold",fontSize:"1.2rem"}}>{training.title}</p>
             <div style={{fontSize:"0.7rem",color:"grey"}}><span>{training.startTime} to {training.endTime}</span>
             <span style={{marginLeft:"20px"}}>20 participants</span>
             </div>
             </div></div>  
  
           </div>
               )
           }) }
        </div>
    )
}

export default Trainingpage

