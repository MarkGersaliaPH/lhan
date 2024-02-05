import React, { useState } from 'react';
import Card, { CardBody } from './Card';
import { Link } from '@inertiajs/react';

export default function TabLink({ tabs,children }) {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    return (
        <div className="w-full">
            <ul className="flex mb-0 list-none flex-wrap pt-3  flex-row">
                {tabs.map((tab, index) => (
                    <li className="-mb-px last:mr-0 flex-auto text-center" key={index}>
                         <Link href={tab.href}
                            className={` font-bold  px-5 py-3 cursor-pointer rounded-t-xl block border-b leading-normal ${!tab.isActive ? ' bg-blue-200' : 'text-blue-600 bg-white'}`}
                            > 
                           {tab.name} 
                        </Link> 
                    </li>
                ))}
            </ul>

            {/* {tabs.map((tab, index) => {
                if (tab.name !== activeTab) return null;
                return <div key={index}>
                    <div className="rounded-b-xl bg-white shadow-lg p-4"> 
                        {tab.content} 
                    </div>
                    </div>;
            })} */}
             <div className="rounded-b-xl bg-white shadow-lg p-4"> 
                        {children} 
                    </div>
        </div>
    );
}
