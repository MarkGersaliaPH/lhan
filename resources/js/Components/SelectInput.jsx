import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function SelectInput(
    { type = "text", className = "", isFocused = false, options, textAsValue, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            type={type}
            className={
                "border-gray-300 w-full focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={input}
        >
            <option value="" className="capitalize">
                Select {props.name}
            </option>
            {options &&
                options.map((item, key) => (
                    <option value={textAsValue? item.name :item.id}>{item.name}</option>
                ))}
        </select>
    );
});
