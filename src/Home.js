import { useEffect, useState } from "react"


function Home (){

    const [cars,setCars]= useState([ ]);

    const pegaCarros =()=>{
        fetch('https://api.b7web.com.br/carros/api/carros')
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                setCars(json.cars)
            })

    }
    useEffect(()=>{
        pegaCarros()
    }, [])
    

    return (
        <div>
            <h1>HOME</h1>
            <button onClick={pegaCarros}>CLICK</button>
            <hr></hr>
            {cars.map((item,index)=>(
                <div key={index}>
                    <img src={item.photo}/>
                    <h3>{item.brand}-{item.name}</h3>
                </div>    
            ))}
            
        </div>
    )
}

export default Home;