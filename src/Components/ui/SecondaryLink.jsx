import React from "react";
import clsx from "clsx";

function SecondaryLink({ children, className = "", ...props }) {
    return (
        <button
            {...props}
            className={clsx(
                `
   px-3 py-1.5
        rounded-full
        text-sm
        font-medium
        tracking-[0.14em]
 
    border
     border-slate-200
      bg-white
        text-slate-700
        transition-all
        duration-200
        hover:bg-slate-100
        hover:text-slate-900
        `,
                className
            )}
        >
            {children}
        </button>
    );
}

export default SecondaryLink;
