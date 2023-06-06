import React, {useState} from 'react'

export const Footer = () => {
  
   const [clicks, setClicks] = useState(0);
   const year = new Date().getFullYear();
   const companyName = "Cariño Malo";
   const handleClick = () => {
    setClicks(clicks+1);
   } 
  
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
      <span
       to={"/"} className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration"
       onClick={handleClick} >
        
        <img className="logo1" height="52" src="logo1.PNG" alt="cmgiratorio" />
         
        </span>
        <span className="mb-3 mb-md-0 text-body-secondary">&copy; {year} {companyName} Clicks={clicks} </span>
      </div>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
      </ul>
    </footer>
  </div>
  )
}


 