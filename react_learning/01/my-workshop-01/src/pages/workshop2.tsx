import React from "react";
import Profile_card from "../components/shared/cardProfile";
import { profile } from "../mock/mockpro";
import '../index.css'

const Workshop2 = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <Profile_card profile={profile} key = {profile.id}/>
            </div>
        </div>
    );
};

export default Workshop2;