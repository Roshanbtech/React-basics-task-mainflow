import React from 'react';
import useInput from '../hooks/useInput';

const Child = ({ msg }) => {
    const [value, onChange] = useInput();

    return (
        <div className="bg-yellow-50 rounded-xl p-6 shadow mb-6 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold text-yellow-700 mb-2">Child Component</h2>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Type here…"
                className="border-2 border-yellow-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-2 w-full"
            />
            <p className="mb-2 text-gray-800">Current value: <span className="font-semibold text-yellow-600">{value}</span></p>
            <p className="text-sm text-gray-600 italic">{msg} <span className="not-italic text-black">from parent</span>.</p>
        </div>
    );
}

export default Child;
