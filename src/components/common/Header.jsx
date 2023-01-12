import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import Modal from "./Modal";

const Header = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <section className="header-container">
                <div className="header left">
                    <button className="modal-home-btn btn" onClick={() => {setOpenModal(!openModal)}}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <Link to="/">
                        <img src="../images/ytlogo.png" alt="" />
                    </Link>
                </div>
                <div className="header middle">
                    <div className="searchbox">
                        <input type="text" placeholder="Search"/>
                        <button className="search-btn">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <button className="microphone-btn btn">
                        <i className="fa-solid fa-microphone"></i>
                    </button>
                </div>
                <div className="header right">
                    <button className="video-btn btn">
                        <i className="fa-solid fa-video"></i>
                    </button>
                    <button className="bell-btn btn">
                        <i className="fa-regular fa-bell"></i>
                    </button>
                    <img src="../images/ytuserlogo.jpg" alt=""/>
                </div>
            </section>
            <Modal openModal={openModal} setModal={setOpenModal}/>
        </>
    )
}

export default Header;