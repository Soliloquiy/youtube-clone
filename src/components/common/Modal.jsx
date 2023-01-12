import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ openModal, setModal }) => {
    console.log(openModal)
    return (
        <>
            <section className={openModal ? "modal-overlay open-modal" : "modal-overlay"}>
                <div className={openModal ? "modal-container open-modal" : "modal-container"}>
                    <div className="modal-header">
                        <button className="modal-close-btn" onClick={() => {setModal(!openModal)}}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <Link to="/">
                            <img src="../images/ytlogo.png" alt="" />
                        </Link>
                    </div>
                    <div className="modal-top">
                        <div className="modal-home">
                            <button className="modal-home-btn modal-btn">
                                <i className="fa-solid fa-house"></i>
                                <p>Home</p>
                            </button>
                        </div>
                        <div className="modal-shorts">
                            <button className="modal-shorts-btn modal-btn">
                                <i className="fa-solid fa-display"></i>
                                <p>Shorts</p>
                            </button>
                        </div>
                        <div className="modal-subscriptions">
                            <button className="modal-subscriptions-btn modal-btn">
                                <i className="fa-regular fa-credit-card"></i>
                                <p>Subscriptions</p>
                            </button>
                        </div>
                    </div>
                    <div className="modal-middle">
                        <div className="modal-library">
                            <button className="modal-library-btn modal-btn">
                                <i className="fa-solid fa-photo-film"></i>
                                <p>Library</p>
                            </button>
                        </div>
                        <div className="modal-history">
                            <button className="modal-history-btn modal-btn">
                                <i className="fa-solid fa-house"></i>
                                <p>History</p>
                            </button>
                        </div>
                        <div className="modal-your-videos">
                            <button className="modal-your-videos-btn modal-btn">
                                <i className="fa-solid fa-display"></i>
                                <p>Your Videos</p>
                            </button>
                        </div>
                        <div className="modal-watch-later">
                            <button className="modal-watch-later-btn modal-btn">
                                <i className="fa-regular fa-credit-card"></i>
                                <p>Watch Later</p>
                            </button>
                        </div>
                        <div className="modal-favorites">
                            <button className="modal-favorites-btn modal-btn">
                                <i className="fa-solid fa-photo-film"></i>
                                <p>Favorites</p>
                            </button>
                        </div>
                    </div>
                    <div className="modal-bottom">
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal;