import React, { Fragment } from "react";

function Links(props) {
    return (
        <Fragment>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
        </Fragment>
    )
}

export default Links;