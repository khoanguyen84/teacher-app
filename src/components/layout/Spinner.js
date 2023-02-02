import React from "react";
import loading from '../../asset/images/loading.gif';

function Spinner(){
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <img className="loading-sm" src={loading} alt="" />
        </div>
    )
}

export default Spinner;