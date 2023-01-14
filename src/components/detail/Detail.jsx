import "./Detail.css";
import millify from "millify";
import { Link } from "react-router-dom";
import moment from 'moment';

const Detail = ({ item, data }) => {
    const text_truncate = function(str, length, ending) {
        if (length == null) {
          length = 65;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
      };
    return (
        <>
            <section className="detail-container">
                <div className="detail-main">
                    <img className="main-cover" src={item.image} />
                    <h4>{item.title}</h4>
                    <div className="main-flex1">
                        <img className="main-logo" src={item.logo} />
                        <div className="main-flex2">
                            <p className="main-creator">{text_truncate(item.creator,10)}</p>
                            <p className="main-subscribers">{millify(item.subscribers)}</p>
                        </div>
                        <button className="main-join-btn">
                             <p>Join</p> 
                        </button>
                        <button className="main-subscribe-btn">
                             <p>Subscribe</p> 
                        </button>
                        <div className="main-likes">
                            <button className="likes">
                                <i className="fa-regular fa-thumbs-up"></i>
                                <p>{millify(item.likes)}</p> 
                            </button>
                            <button className="dislikes">
                                <i className="fa-regular fa-thumbs-down"></i>
                            </button>
                        </div>
                        <button className="main-share-btn">
                            <i className="fa-solid fa-share"></i>
                             <p>Share</p> 
                        </button>
                        <button className="main-more-btn"> <p>...</p> </button>
                    </div>
                    <div className="main-description">
                        <div className="main-views-time">
                            <p>{millify(item.views)} views Streamed {moment(item.date, "YYYYMMDD").fromNow()}</p>
                        </div>
                        <div>
                            <p className="main-description-p">{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className="detail-featured">
                {data.map((item,index) => {
                        return (
                            <div className="box" key={index}>
                              <Link to={`/detail/${item.id}`}>
                                <img src={item.image} className="home-cover" alt="" />
                                <div className="box-flex1">
                                    <div className="p-flex">
                                        <p className="home-title">{text_truncate(item.title)}</p>
                                        <p>{item.creator}</p>
                                        <p>{millify(item.views)} views · {moment(item.date, "YYYYMMDD").fromNow()}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Detail;