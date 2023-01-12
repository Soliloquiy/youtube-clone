import data from "../data/Data";
import "./Home.css";
import millify from "millify";
import moment from 'moment';
import Aside from "../common/Aside";

const Home = () => {
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
            <Aside />
            <section className="home-container">
                <div className="home grid4">
                    {data.map((item,index) => {
                        return (
                            <div className="box" key={index}>
                                <img src={item.image} className="home-cover" alt="" />
                                <div className="box-flex1">
                                    <img className="home-logo" src={item.logo} alt="" />
                                    <div className="p-flex">
                                        <p className="home-title">{text_truncate(item.title)}</p>
                                        <p>{item.creator}</p>
                                        <p>{millify(item.views)} views · {moment(item.date, "YYYYMMDD").fromNow()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Home;