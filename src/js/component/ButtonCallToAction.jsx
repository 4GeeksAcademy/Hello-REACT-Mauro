import React from "react";

export const BtnCallToAction = () => {

    const Action = {
        text: 'Registrate',
        background: 'warning',
    };

    return (
        <div className="container">
            <button className={`btn btn-${Action.background} px-5 mb-5`} type="button">
                {Action.text}
            </button>
        </div>

    );
};