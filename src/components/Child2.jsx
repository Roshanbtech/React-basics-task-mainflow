import React from 'react';

const Child2 = ({ sendMsg }) => {
    return (
        <div className="bg-blue-50 rounded-xl p-6 shadow mb-6 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold text-blue-700 mb-3">Child 2 Component</h2>
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => sendMsg('Hello from Child 2!')}
            >
                Send Message to Parent
            </button>
        </div>
    );
}

export default Child2;
