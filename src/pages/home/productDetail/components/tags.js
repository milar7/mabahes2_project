/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */

import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
    var tagList = "...";
    if (tags !== undefined) {
        tagList = tags.map((tag) => (
            <li key={Math.random()} className="list-group-item">
                <Link to="#">{tag}</Link>
            </li>
        ));
    }
    return (
        <div>
            <ul className="list-group list-group-horizontal">{tagList}</ul>
        </div>
    );
};

export default Tags;
