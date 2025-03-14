import { useEffect } from 'react';



function App() {
  

  
  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
  }, []); 

  return (
    <div className="App">
      <h1>Redirecting (I'm sorry)...</h1>
    </div>
  );
}

export default App;