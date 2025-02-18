import {Link} from 'react-router-dom';



function Menu(){
    
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">ABC Automobiles</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-testid="menu-content">
        <li className="nav-item">
        <Link className="navbar-brand" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/about">About</Link>

        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/vechile-list">Vechiles</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/services">Servcies</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/contactus">Contact Us</Link>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
      </>
    )
  }




export default Menu;
