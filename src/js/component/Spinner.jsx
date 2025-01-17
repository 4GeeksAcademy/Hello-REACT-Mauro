import React from "react";

export const Spinner = () => {

    const spinnerStyles = {
        color: 'warning',
        visible: false
    };

    return (
        <div className="container">
            <div className={`spinner-border text-${spinnerStyles.color} ${spinnerStyles.visible ? '' : 'd-none'}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    );

};