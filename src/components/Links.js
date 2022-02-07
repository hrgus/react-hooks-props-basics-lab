import React, { Fragment } from "react";

function Links({ github, linkedin}) {
    return (
        <Fragment>
            <h3>Links</h3>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </Fragment>
    )
}

export default Links;