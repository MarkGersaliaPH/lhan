import React from "react";

function Toggle({ ...props }) {
    return (
        <div>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" {...props} />
                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
    );
}

export default Toggle;
