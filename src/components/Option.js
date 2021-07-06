import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text"><span className="option__counter">{props.count}. </span>{props.optionText}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOptionSingle(props.optionText);
            }}
        >
            Remove
    </button>
    </div>
);

export default Option;