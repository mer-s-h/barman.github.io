import {Link } from "react-router-dom";

export default function Nav() {

    return (

            <div id="homeLink">
                <Link to="/" className="navLinks" id="Logo" >
                    <img className="img_header" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIyeHajJYMkMWbHg3m_t5_kk4tlZCj08Yew&usqp=CAU" alt="header"/>
                    </Link>
            </div>
    )
}