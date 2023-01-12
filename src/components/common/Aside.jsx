import "./Aside.css"

const Aside = () => {
    return (
        <>
            <aside className="aside-container">
                <div className="aside-home">
                    <button className="aside-home-btn aside-btn">
                        <i className="fa-solid fa-house"></i>
                        <p>Home</p>
                    </button>
                </div>
                <div className="aside-shorts">
                    <button className="aside-shorts-btn aside-btn">
                        <i className="fa-solid fa-display"></i>
                        <p>Shorts</p>
                    </button>
                </div>
                <div className="aside-subscriptions">
                    <button className="aside-subscriptions-btn aside-btn">
                        <i className="fa-regular fa-credit-card"></i>
                        <p>Subscriptions</p>
                    </button>
                </div>
                <div className="aside-library">
                    <button className="aside-library-btn aside-btn">
                        <i className="fa-solid fa-photo-film"></i>
                        <p>Library</p>
                    </button>
                </div>
            </aside>
        </>
    )
}

export default Aside;