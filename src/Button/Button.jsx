import React from "react";

const Button = ({button}) =>{
    return(
        <div className="button">
            <button className="w-[8rem] h-[3rem] bg-red-500 rounded-md">{button}</button>
        </div>
    )
}

export default Button;