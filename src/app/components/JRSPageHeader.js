import React from "react";
import PropTypes from "prop-types";

import { PageHeader } from "react-bootstrap";

export class JRSPageHeader extends React.Component {
    render() {
        return (
            <PageHeader>
                {this.props.pageheader}
            </PageHeader>
        );
    }
}

JRSPageHeader.propTypes = {
    pageheader: PropTypes.string
};
