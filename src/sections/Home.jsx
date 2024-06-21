import React from "react";
import {
  greenWhatsappIcon,
  gridMenu,
  groupIcon,
  searchIcon,
  userIcon,
} from "../assets";

import { homeNavLinks } from "../constants";
import HomeNavLinks from "../components/HomeNavLinks";

const Home = () => {
  return (
    <section className="flex justify-center items-center">
      <section className="bg-white md:h-[80vh] h-screen md:w-[20%] w-[80%] mt-[3rem] rounded-[50px] relative overflow-hidden">
        <div className="header-content relative bg-gradient-to-tr from-[#25D366]  to-yellow-300 overflow-hidden">
          <img
            className="absolute -bottom-[2.4rem] -left-[2.8rem] w-[60%]"
            src={greenWhatsappIcon}
            alt="green-whatsapp-icon"
          />

          <h3 className="text-center font-semibold pt-6 text-white">
            Whatsapp
          </h3>

          <img
            src={gridMenu}
            alt="grid-menu"
            className="absolute w-[4%] right-4 top-[2.1rem] "
          />

          <div className="flex justify-around items-center mt-6 relative z-20">
            <img src={groupIcon} alt="group-icon" className="w-[12%]" />

            <div className="h-4 w-4 bg-white rounded-full absolute left-[3.3rem] top-[1.98rem]"></div>

            <div className="flex gap-4 bg-white pt-2  px-4 rounded-t-xl">
              {homeNavLinks.map((homeNavLink) => (
                <HomeNavLinks key={homeNavLink.name} {...homeNavLink} />
              ))}
            </div>

            <div className="h-4 w-4 bg-white rounded-full absolute right-[2.6rem] top-[1.9rem]"></div>

            <img src={searchIcon} alt="search-icon" className="w-[7%] h-[5%]" />
          </div>
        </div>

        <div className="flex justify-between items-center mx-4 pt-5 border-b-2 pb-2">
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

          <p className="text-[.6rem] text-slate-400">9:45</p>
        </div>
      </section>
    </section>
  );
};

export default Home;
