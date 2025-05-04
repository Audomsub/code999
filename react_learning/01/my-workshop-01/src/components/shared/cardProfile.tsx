import React, { useState } from  "react";
import { Profilex } from "../../mock/mockpro";
import StatusButton from "./button";
import '../index.css';

type ProfileProps = {
    profile: Profilex;
}

const Profile_card = ({ profile }: ProfileProps) => {
    const [isOnline, setIsOnline] = useState(profile.isOnline);
    const toggleStatus = () => {
        setIsOnline(!isOnline);
    };
    return (
        <div className="border w-full max-w-md h-auto p-4 m-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-r from-rose-400 to-red-500 shadow-red-500/50">
            <img
                className="relative inline-flex img w-100 h-100 mb-5 rounded-full object-cover sm:w-32 sm:h-32 border"
                src="https://th.bing.com/th?q=Luffy+Pixel+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=TH&setlang=en&adlt=strict&t=1&mw=247"
                alt="Luffy Pixel Art"
            />
            <div className="name flex border p-2 mb-4 w-full text-center sm:text-left bg-gradient-to-r from-white to-pink-500 rounded-lg">
                <h1 className="font-bold">Name:&nbsp;  &nbsp;</h1><span>Audomsub</span>
            </div>
            <div className="email flex border p-2 mb-4 w-full text-center sm:text-left bg-gradient-to-r from-white to-pink-500 rounded-lg">
                <h1 className="font-bold">Email:&nbsp;  &nbsp;</h1><span>diwooooooooo@gmail.com</span>
            </div>
                
            <div className="status flex border p-2 w-full text-center sm:text-left bg-gradient-to-r from-white to-pink-500 rounded-lg">
                <h1 className="font-bold">Status:&nbsp;  &nbsp;</h1><StatusButton isOnline = {isOnline} onToggle={toggleStatus}/>
            </div>
        </div>
    );
};

export default Profile_card;