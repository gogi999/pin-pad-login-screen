import React from 'react';

const Display = ({ text, isHidden }) => {
    let i = 0;

    return (
        <div className="display">
            <div className="panel">
                {isHidden && (
                    Array.from(text).map((c) => <span key={i++}>*</span>)
                )}
                {!isHidden && (
                    Array.from(text).map((c) => <span key={i++}>{c}</span>)
                )}
            </div>
        </div>
    )
}

export default Display;
