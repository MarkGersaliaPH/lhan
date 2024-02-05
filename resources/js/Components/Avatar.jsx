import React from "react";

function Avatar({ className, src, ...props }) {
    return (
        <div>
            <img
                {...props}
                src={
                    src ? src : "https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                }
                class={`w-10 ` + `${className}`}
                alt="Avatar"
            />
        </div>
    );
}

export default Avatar;
