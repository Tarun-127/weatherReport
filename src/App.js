import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [city,setCity] = useState("")
  const [result,setResult] = useState("")
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const api = {
    key:"023a635455eef2287e07aabc2d479c27",
    base:"https://api.openweathermap.org/data/2.5/",
  };
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`${api.base}weather?q=${city}&APPID=${api.key}`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15
      setResult("Temperature at"+" "+city+"\n" + Math.round(celsius)+"°c")
      setCity("")
    }).catch(error => console.log(error))
  }
  

  


  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>Weather App</h4>
            <form onSubmit = {submitHandler}>
            <input type='text' name='city' value={city} onChange={changeHandler}/> <br /> <br />
            <input type='submit' value = 'Get Temperature'/>
            </form>
            <h1> {result}</h1>

          </div>

        </div>
      </center>
    </div>
   
  )
}

export default App;
