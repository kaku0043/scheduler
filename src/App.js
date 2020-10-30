import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Trainingpage from './components/trainingpage';
import Titlepage from './components/titlepage';
import Timepage from './components/timepage';


function App() {
    const [trainingpage, settrainingpage] = useState(true);
    const [ titlepage, settitlepage] = useState(false);
    const [timepage, settimepage] = useState(false);
    const [title, settitle] = useState("");
    const [date, setdate] = useState("");
    const [startTime, setstartTime] = useState("");
    const [endTime, setendTime] = useState("");
    console.log(title);
    console.log(date);
    console.log(startTime);
    console.log(endTime);
    useEffect(() => {
      inserttraining();
    }, [startTime,endTime])
    function inserttraining()
    { if(startTime&&endTime){
      fetch('https://natural-rattler-14.hasura.app/v1/graphql',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({query:`mutation{
              insert_training(objects: {date: "${date}", endTime: "${endTime}", startTime: "${startTime}", title: "${title}"})
              {
                returning{
                  id
                  title
                  endTime
                  startTime
                  date
                }
                affected_rows
              }
            }`})
    
        }).then((res)=>{
          setTimeout(() => {
            window.location.reload(true)
          }, 200);
        })}
    }
  return (
    <div className="App">
    {
      trainingpage&&(<Trainingpage setTraining={()=>{settrainingpage(false);settitlepage(true)}}/>)
      }
    {
      titlepage&&(<Titlepage setTitle={()=>{settitlepage(false);settimepage(true)}} settitle={(data)=>{settitle(data)}} setDate={(data)=>{setdate(data)}} />)
    }
     {
       timepage&&(<Timepage setTime={()=>{settimepage(false);settrainingpage(true)}} startTime={(time)=>{setstartTime(time)}} endTime={(time)=>{setendTime(time)}} insertTraining={()=>{inserttraining()}} startt1={startTime} endt1={endTime} />)

     }
    </div>
  );
}

export default App;
