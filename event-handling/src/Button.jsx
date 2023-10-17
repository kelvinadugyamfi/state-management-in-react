const Button =()=>{
    function clickMe(){
        console.log('Hello World');
    }
return (

<>
    <div className="d-flex justify-content-center align-items-center my-5">
    <button onClick={clickMe} className="btn btn-primary">Click Me</button>
    </div>

</>
)
}

export default Button