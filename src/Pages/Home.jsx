import { Link } from "react-router-dom";
import './home.css';
const links=[
    {

        name:"Home",
        path:"/",
        icon:<i className="fa-solid fa-house"></i>
    
        
    },
    {
        name:"Course",
        path:"/course",
        icon:<i className="fa-solid fa-book"></i>
    },
    {
        name:"About",
        path:"/about",
        icon:<i className="fa-solid fa-user"></i>
    },
    {
        icon:<i className="fa-solid fa-phone"></i>,
        name:"Contact",
        path:"/contact"
    },
    {
        name:"Amount",
        path:"/amount",
        icon:<i className="fa-solid fa-indian-rupee-sign"></i>
        
    },
    
]
const HomePage=()=>{
   
  return  (
    <>
    { <h1>Guvi</h1>}
    { <h4>Thanks for visit our site</h4>}
     <ol>
         {links.map((link,index)=>{
             return <li key={index}><Link to={link.path}>{link.name}  {link.icon}</Link></li> 
         })}
     </ol>
     
    </>
 
  );
};
export default HomePage;