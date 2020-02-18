import React from "react";

const Text = (props) => {
    return (
        <div className="text">
            <div className="text__left">
                <h1 className="text__header">
                    {props.title_left}
                </h1>
                <p className="text__paragraph">
                    {props.paragraphLeft}
                </p>

            </div>
            <div className="text__right">
                <h1 className="text__header">
                    {props.title_right}
                </h1>
                <div className="text__paragraph">
                    {props.paragraphRight}
                </div>
            </div>
        </div>
    )
};

export default Text;
