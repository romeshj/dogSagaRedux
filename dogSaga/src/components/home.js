import React from 'react';
import {Link, withRouter} from 'react-router-dom';
const Home = (props) => {
    return(
    <div>
        <h3>HOME PAGE</h3>
        <Link to="/dog">Dog App Saga</Link> | &nbsp; <Link to="/form">Simple Redux Example (Button Click)</Link>
    </div>
    )
}
export default withRouter(Home)

