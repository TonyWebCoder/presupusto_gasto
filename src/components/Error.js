import React from 'react';
import PropTypes from "prop-types";
const Error = ({mensaje})=> {
    return(
        <p className="alert alert-danger error">{mensaje}</p>
    );

}


Error.prototype = {
    mensaje: PropTypes.string.isRequired
}
export default Error