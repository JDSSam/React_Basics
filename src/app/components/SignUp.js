import React from "react";

import { JRSTable } from "./Table";
import {JRSPageHeader} from "./JRSPageHeader";

export class SignUp extends React.Component {
    render(){
        var homeHeader = {
            columns : ["#","Sign Up","Last Name","Username"]
        };

        var homeData = {
            tData : [
                ["1","Mark","Otto","@mark"],
                ["2","Mar","Oto","@mak"]
            ]
        };

        return(
            <div>
                <JRSPageHeader pageheader = "Sign Up"/>
                <JRSTable headers = {homeHeader} data = {homeData}/>
            </div>
        );
    }
}