import { Link } from "@inertiajs/react";

export default function SecondaryButton({
    type = "button",
    className = "",
    href,
    disabled,
    children,
    ...props
}) {
    return (
        <>
            {href ? (
                <Link
                    href={href}
                    className={
                        `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold  text-gray-700   tracking-widest hover:bg-white-700 focus:bg-white-700 active:bg-white-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                            disabled && "opacity-25"
                        } ` + className
                    }
                    disabled={disabled}
                >
                    {children}
                </Link>
            ) : (
                <button
                className={
                    `inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold  text-gray-700  tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                        disabled && "opacity-25"
                    } ` + className
                }
                    {...props}
                    type={type}
                    disabled={disabled}
                >
                    {children}
                </button>
            )}
        </>
    );
}
