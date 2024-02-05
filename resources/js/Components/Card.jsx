import React from "react";

export function CardHeader({ title, children, className, titleClass }) {
    return (
        <div
            className={`p-6 border-b dark:border-slate-200 ${className}`}
        >
            <h5
                className={`text-xl font-medium  leading-tight align-middle text-neutral-800 dark:text-neutral-50 ${titleClass}`}
            >
                {title}
            </h5>
            <div className="flex gap-2 ">{children}</div>
        </div>
    );
}
export function CardBody({ title, children, className }) {
    return (
        <div className={`p-3 ${className}`}>
            <div>{children}</div>
        </div>
    );
}
export function CardFooter({ title, children }) {
    return (
        <div className="flex items-center  justify-between pb-5 mr-10 mt-10">
            <div>{children}</div>
        </div>
    );
}

function Card({ title, children, className, ...props }) {
    return (
        <div  {...props}
        className={`
            block rounded-lg border  dark:bg-slate-800 bg-white
            ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Card;
