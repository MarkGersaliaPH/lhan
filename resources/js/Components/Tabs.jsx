import React, { useState } from 'react';
import Card, { CardBody } from './Card';

export default function Tabs({ tabs,children }) {
    const [activeTab, setActiveTab] = useState(tabs[0].name);
 
    return (
        <div className="w-full">
            <ul className="flex mb-0 list-none flex-wrap pt-3  flex-row">
                {tabs.map((tab, index) => (
                    <li className="-mb-px last:mr-0 flex-auto text-center" key={index}>
                        <span
                            className={` font-bold  px-5 py-3 cursor-pointer rounded-t-xl block border-b leading-normal ${activeTab != tab.name ? ' bg-blue-200' : 'text-blue-600 bg-white'}`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.name}
                        </span>
                    </li>
                ))}
            </ul>

            {tabs.map((tab, index) => {
                if (tab.name !== activeTab) return null;
                return <div key={index}>
                    <div className="rounded-b-xl bg-white shadow-lg p-4"> 
                        {tab.content} 
                    </div>
                    </div>;
            })}
        </div>
    );
}
