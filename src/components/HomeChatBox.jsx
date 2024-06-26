import React from "react";

import { userIcon } from "../assets";

const HomeChatBox = ({ time, borderBottom }) => {
  return (
    <div
      className={`flex justify-between items-center mx-4 pt-5 ${
        borderBottom ? borderBottom : "border-b-2"
      } pb-2`}
    >
      <div className="flex items-center">
        <div className="bg-slate-300 w-fit rounded-full p-1">
          <img src={userIcon} alt="user-icon" />
        </div>

        <div className="ml-2">
          <p className="text-sm font-bold">Lorem, ipsum.</p>
          <p className="text-[.6rem] text-slate-400">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <p className="text-[.6rem] text-slate-400">{time ? time : "9:45"}</p>
    </div>
  );
};

export default HomeChatBox;
