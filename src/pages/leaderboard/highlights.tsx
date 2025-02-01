import medal from "../../assets/image/mdl.png";

const Highlights = () => {
  return (
    <div>
      <div className="flex flex-row justify-start items-center border-t border-b border-green-300">
        <div className="flex flex-row items-center justify-start w-[200px] border-r border-green-300 p-4">
          <img src={medal} alt="medal" className="w-8 h-8" />
          <p className="text-yellow-500 text-[12px]">This month top earners</p>
        </div>
        <div className=" p-4">
            <button className="text-yellow-500">See all</button>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
