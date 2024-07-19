function Footer(){
    return (
      <>
                            <div style={{backgroundImage:'url("https://images.pexels.com/photos/23409055/pexels-photo-23409055/free-photo-of-cars-on-street-in-town.jpeg")'}}>

      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3" >
      <li className="nav-item" ><a href="#" className="nav-link px-2 " style={{color:"white"}}>Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 "style={{color:"white"}}>About Us</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 " style={{color:"white"}}>Vehicles</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 " style={{color:"white"}}>Servcies</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 " style={{color:"white"}}>Contact US</a></li>
    </ul>
    <div data-testid="footer-content">
    <p className="text-center " style={{color:"white"}}>© 2024 ABC Automobiles</p>
    </div>
  </footer>
</div>
</div>
      </>
 
    )
  }


export default Footer;
