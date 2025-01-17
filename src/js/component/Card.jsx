import React from "react";
import PhotoRigo from "../../img/rigo-baby.jpg"

export const Card = () => {

    const handleOnClick = () => {

        alert('Presione el boton')
    };

    return (
        <div className="container">
            <div className="card bg-warning-subtle" style={{ width: "18rem" }} onClick={handleOnClick}>
                <img src="https://randomuser.me/api/portraits/women/28.jpg" className="card-img-top" alt="..." />
                <img src={PhotoRigo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    );
};