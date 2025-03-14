import {useState, useEffect } from 'react';
import PocketBase from 'pocketbase';


async function upload(name,setSubmit,setDisabed){
  setDisabed(true)
  const pb = new PocketBase('https://ai-study-guides.pockethost.io');
  // example create data
  const data = {
    "Name": name
  };

  const record = await pb.collection('LakesideLeaks').create(data);
  setSubmit(true)
  
  
}

function App() {
  

  const [submit,setSubmit]=useState(false)
  const [name,setName]=useState('')
  const [disabed,setDisabed]=useState(false)
  useEffect(() => {
    if (submit){
      window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    }
  }, [submit]); 
  
  return (
    <div className="App">
      {submit?<h1>Redirecting (I'm sorry)...</h1>:
      <div>
        <h1>Welcome to Lakeside Leaks</h1>
        <p>In order to mantain the anonymity of our contributors, we do not collect any information</p>
        <p>Please enter your name to get started.</p>
        <input onChange={(e)=>setName(e.target.value)} value={name}></input>
        <button disabled={disabed} onClick={()=>upload(name,setSubmit,setDisabed)}>Submit</button>
      </div>
      }
    </div>
  );
}

export default App;