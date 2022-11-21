import React from 'react';

function Button({text, toTheConsole,toBeDisabled }) {
    return (
        <>
            <button disabled={toBeDisabled} className="button" onClick={()=> console.log({toTheConsole})}> <p>{text}</p></button>
        </>
    );
}

export default Button;