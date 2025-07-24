import React from 'react';
import useInput from '../hooks/useInput';

const Child = ({msg}) => {
    const [value, onChange] = useInput();
    return (
        <>
        <input type="text" value={value} onChange={onChange} />
        <p>{value}</p>
        <h2>Child</h2>
        <p>{msg} from parent.</p>
        </>
    );
}

export default Child