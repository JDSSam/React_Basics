import React from "react";

import { JRSTable } from "./Table";
import { JRSPageHeader } from "./JRSPageHeader";


export class Home extends React.Component {
    render() {
        var homeHeader = {
            columns: ["#", "First Name", "Last Name", "Username"]
        };

        var homeData = {
            tData:
                [
                    ["1", "Mark", "Otto", "@mark"],
                    ["2", "Mar", "Oto", "@mak"]
                ]
        };

        return (
            <div>
                <JRSPageHeader pageheader = "Home"/>
                <JRSTable headers={homeHeader} data={homeData} />
            </div>
        );
    }
}