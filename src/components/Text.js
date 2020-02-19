import React from "react";

const Text = (props) => {


    return (
        <div className="text">
            <div className="text__left col-md-6">
                <h1 className="text__header">
                    {props.title_left}
                </h1>
                <div className="text__paragraph"
                     dangerouslySetInnerHTML={{__html: props.paragraphLeft}}
                />
            </div>
                <div className="text__right col-md-6">
                    <h1 className="text__header">
                        {props.title_right}
                    </h1>
                    <div className="text__paragraph"
                        dangerouslySetInnerHTML={{__html: props.paragraphRight}}
                    />
                </div>
        </div>
)
};

export default Text;
