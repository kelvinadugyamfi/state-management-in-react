import { useState } from "react"

import ("./Form.css")

const Form =()=>{
    const [firstNumState,setFirstNumber] = useState(0)
    const [secondNumState, setSecondNumber] = useState(0)
    const [result, setResult] = useState(0);

    const addition = ()=>{
        setResult(Number(firstNumState) + Number(secondNumState))
    }

    const onFirstNumberChange = (e)=>{
        setFirstNumber(e.target.value)
        setResult(parseInt(e.target.value)+ parseInt(secondNumState))
    }

    const onSecondNumberChange = (e)=>{
        setSecondNumber(e.target.value)
        setResult(parseInt(e.target.value)+ parseInt(firstNumState))
    }

return(
<>
    
   <div className="container justify-content-center align-items-center my-5 w-50">
  <div className="card">
    <div className="card-header">
      <h1>Addition</h1>
    </div>
    <div className="card-body">
      <div className="input-group mb-3 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text">First number:</span>
        </div>
        <input type="number" onChange={onFirstNumberChange} value={firstNumState} className="form-control" placeholder="Enter your first number" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div className="input-group mb-3 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text">Second number:</span>
        </div>
        <input type="number" onChange={onSecondNumberChange} value={secondNumState} className="form-control" placeholder="Enter your second number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      </div>

      <span>Your Result is :<span> {result} </span> </span> <br />

      <button className="btn btn-primary mt-3" onClick={addition}>Add</button>
    </div>
  </div>
</div>

</>
)
}

export default Form