import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Chips from "./Snacks/Chips";
import Cookies from "./Snacks/Cookies";
import Hotfries from "./Snacks/Hotfries";

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <h1>Vending Machine</h1>
            <BrowserRouter >

                <Route exact path ="/">
                    <ul>
                        <li><Link to="/chips">Chips</Link></li>
                        <li><Link to="/cookies">Cookies</Link></li>
                        <li><Link to="/hotfries">Hot Fries</Link></li>
                    </ul>
                </Route>

                <Route exact path ="/chips">
                    <div><Link to="/">{"<--"}</Link></div>
                    <Chips />
                </Route>

                <Route exact path ="/cookies">
                    <div><Link to="/">{"<--"}</Link></div>
                    <Cookies />
                </Route>

                <Route exact path ="/hotfries">
                    <div><Link to="/">{"<--"}</Link></div>
                    <Hotfries />
                </Route>

                <Navbar />
                
            </BrowserRouter>

        </div>
    );
}


export default VendingMachine;