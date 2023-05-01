import "./App.css"
import {AiOutlineSearch} from "react-icons/ai";
import profileicon from "./public/profile-icon.png"

export default function Navbar({children}){

    return(
        <div className="navbar">
            <div className="logo">
                <h2>eventbrite</h2>
                <div className="search">
                    <AiOutlineSearch className="search-icon" ></AiOutlineSearch>
                    <input type="text" placeholder="Search events" />
                </div>
            </div>
            <div className="menu">
                <a href="">Browse Events</a>
                <a href="">Host an event</a>
                <a href="">Help</a>
                <div className="userprofile">
                    <img src={profileicon} alt="" />
                    <p>randomemail@gmail.com</p>  
                </div>      
            </div>
            
        </div>
    )
}