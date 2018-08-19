import React from 'react'
import './style.css'

export default ({current, next, store, isOn}) => {
    const val = next || current;
    const valWithoutSign = val < 0 ? `${val * -1}` : `${val}`;
    const trimmedVal = valWithoutSign.slice(0, 8).split('').map(digit => <span>{digit}</span>);
    return (
        <div className={`screen${isOn ? ' isOn' : ''}`}>
            <strong>{trimmedVal}</strong>
            <div className="status">
                <div>{!!store && 'M'}</div>
                <div>{val < 0 && '−'}</div>
                <div>{valWithoutSign.length > 8 && 'E'}</div>
            </div>
        </div>
    )
}
