import listIconClock from "../images/clock.png";
import listIconQuestionmark from "../images/Questionmark.png";

const Card = ({
  data: { heading, lable, card_img, lable_state, clock, help },
}) => {
  return (
    <div className="p-1 mb-2">
      <div className="flex">
        <div className="basis-auto">
          <img src={card_img} alt="demo" className="w-16" />
        </div>
        <div className="basis-3/4 pl-2.5">
          <ul>
            <li className="leading-4 font-bold mb-1">{heading}</li>
            <li className="leading-4 text-white">
              <span
                className={`${
                  lable_state ? "bg-pink-500 uppercase" : "bg-black"
                } px-2 text-[9px]`}
              >
                {lable}
              </span>
            </li>
            <li className="leading-4 text-xs">
              <p className="flex items-center font-semibold">
                <img src={listIconClock} alt="icon" className="w-2 h-2 mr-1" />{" "}
                <span>{clock}</span>
              </p>
            </li>
            <li className="leading-4 text-xs">
              <p className="flex items-center font-semibold">
                <img
                  src={listIconQuestionmark}
                  alt="icon"
                  className="w-2 h-2 mr-1"
                />{" "}
                <span>{help}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <button className="bg-pink-500 text-white w-full mt-2 rounded h-8">
        30000
      </button>
    </div>
  );
};

export default Card;
