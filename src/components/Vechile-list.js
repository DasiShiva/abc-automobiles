import { useEffect , useState } from "react";
import axios from 'axios';


function VechileList(){
    const [vechiles , setVechiles] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5000/vechiles')
            .then(response=>{
                setVechiles(response.data);
            })
            .catch(error=>{
                console.log('There was an error fetching the vehicles data!',error);
            })
    },[])
    return (
        <div style={{backgroundImage:'url("https://images.pexels.com/photos/23409055/pexels-photo-23409055/free-photo-of-cars-on-street-in-town.jpeg")'}}>
        <div>
            <h2 className=" text-center border-bottom mb-5" style={{fontSize:"70px",color:"white"}} >Vechile List</h2>
            <div className="row">
                {vechiles.map(vechile => (
                    <div className="col-md-4" key={vechile.id}>
                        <div className="card mb-5" style={{backgroundImage:'url("https://images.pexels.com/photos/23409055/pexels-photo-23409055/free-photo-of-cars-on-street-in-town.jpeg")'}}>
                            <img src={vechile.image} className="card-img-top" height={350} alt={vechile.name}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color:"white"}}>{vechile.name}</h5>
                                <p className="card-text" style={{color:"white"}}>Price : ${vechile.price}</p>
                                <p className="card-text" style={{color:"white"}}>Mileage : {vechile.mileage} </p>
                                <p className="card-text" style={{color:"white"}}>Seats : {vechile.seats} </p>
                                <p className="card-text" style={{color:"white"}}>Color: { vechile.color} </p>
                                <p className="card-text" style={{color:"white"}}>Fuel : {vechile.fuel } </p>
                                <p className="card-text" style={{color:"white"}}>Gear : { vechile.gear} </p>
                                <p className="card-text" style={{color:"white"}}>Description : {vechile.description } </p>
                                 <a href="#" class="btn btn-primary" style={{color:"white"}}>Order Now</a>
                            </div>
                        </div>


                    </div>


                ))}
            </div>


        </div>
        </div>
    )
}


export default VechileList;
