import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from "../common/Header";
import data from "../data/Data";
import Detail from "../detail/Detail";
import Home from "../home/Home";


const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/detail' component={() => <Detail data={data} />} />
                    <Route exact path="/detail/:id" render={({ match }) => (
                        <Detail
                        item={data.find(
                        (item) => String(item.id) === match.params.id
                        )}
                        data={data}
                        />
                    )}
                    />
                </Switch>
            </Router>
        </>
    )
}

export default Pages;