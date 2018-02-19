import React from "react";

import { Table } from "react-bootstrap";

export class JRSTable extends React.Component {
    tablerows() {
        return this.props.data.tData.map((rows,i) => {
          var row = rows.map((cell,j) => <td key={j}>{cell}</td>); 
          return(
            <tr key={i}>{row}</tr>
          );
        });
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        {this.props.headers.columns.map((header, i) => <th key={i}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.tablerows()}
                </tbody>
            </Table>
        )
    }
}