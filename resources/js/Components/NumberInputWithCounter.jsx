import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import SecondaryButton from "./SecondaryButton";
import { FaMinus, FaPlus } from "react-icons/fa";

function NumberInputWithCounter({ initialValue, min, max, onChange,value }) {
    const [count, setCount] = useState(value || 0);

    useEffect(()=>{
        setCount(value)
    },[value]);

    const increment = () => {
        if (!max || count < max) {
            const newValue = count + 1;
            setCount(newValue);
            onChange && onChange(newValue);
        }
    };

    const decrement = () => {
        if (typeof min === "undefined" || count > min) {
            const newValue = count - 1;
            setCount(newValue);
            onChange && onChange(newValue);
        }
    };

    return (
        <div className="flex  align-middle items-center border dark:border-slate-500 rounded-md">
            <SecondaryButton
                onClick={decrement}
                className="  border-0 rounded-l-md p-0  dark:bg-transparent dark:hover:bg-slate-900"
            >
                <FaMinus />
            </SecondaryButton>
            <input
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className=" text-center w-5 flex-1 dark:bg-transparent outline-none border-0 p-0"
                min={min}
                max={max}
            />
            <SecondaryButton
                onClick={increment}
                className="  rounded-r-md border-0 p-0  dark:bg-transparent dark:hover:bg-slate-900"
            >
                <FaPlus />
            </SecondaryButton>
        </div>
    );
}

export default NumberInputWithCounter;
