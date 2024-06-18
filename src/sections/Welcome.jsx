import { smallIcon, largeIcon, greenRightArrow } from "../assets";

const Welcome = () => {
  return (
    <section className="bg-gradient-to-bl from-[#25D366] to-yellow-300 md:h-[80vh] h-screen md:w-[20%] w-[80%] mt-[3rem] rounded-[50px] relative overflow-hidden">
      <img
        className="absolute -bottom-11 -left-9 w-[100%] opacity-35"
        src={largeIcon}
        alt="large-icon"
      />

      <div className="content flex flex-col justify-between items-center h-[83%]">
        <div className="flex justify-center items-center mt-6 gap-12">
          <img src={smallIcon} alt="small-icon" />

          <div className="text-right">
            <small className="text-white">Enter your</small>
            <h3 className="font-bold tracking-wider text-[12px] text-white">
              PHONE NUMBER
            </h3>
          </div>
        </div>

        <div className="middle-text">
          <div>
            <p className="text-white text-center mb-2 flex justify-center items-center">
              United States{" "}
              <span className="block relative bottom-[1.5px] left-2">.</span>
            </p>
          </div>

          <div className="bg-white flex justify-between items-center px-1 py-2 rounded-full w-[90%] my-0 mx-auto">
            <span className="block pl-3">+1</span>

            <input
              className="bg-transparent text-center w-[90%] text-[12px] "
              type="text"
              placeholder="phone number"
            />

            <img
              src={greenRightArrow}
              alt="green-right-arrow"
              width={25}
              height={10}
              className="pr-2"
            />
            {/* right arrow icon */}
          </div>
        </div>

        <div className="bottom-text">
          <button className="bg-white p-1 rounded-md cursor-pointer px-4 py-2 text-sm font-semibold">
            Get Started
          </button>
          <p className="text-white text-center text-sm cursor-pointer">
            Need Help?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
