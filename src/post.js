import coverimage from "./public/cover_image.jpeg"
import "./App.css"
import {AiOutlineUpload} from "react-icons/ai"
import {FcLike} from "react-icons/fc"

export default function Post(){
    return(
        <div className="post">
            <div className="coverimage">
                <img src={coverimage} alt="" />
            </div>
            
            <div className="desc">
                <h3>Lorem ipsum dolor sit amet consectetur </h3>
                <p>Mon,Feb 31, 2021 2:30PM IST <br /> Starts at 30 dollar</p>
                <div className="btns">
                    <button><AiOutlineUpload></AiOutlineUpload></button>
                    <button><FcLike></FcLike></button>
                </div>
            </div>
        </div>
    )
}