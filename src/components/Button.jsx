import React from "react";

export default function Button({ text }) {
    return (
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-full uppercase transition tracking-wide shadow-md hover:shadow-xl">
            {text}
        </button>
    );
}
