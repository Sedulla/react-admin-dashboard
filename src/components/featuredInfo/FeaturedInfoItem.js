export const FeaturedInfoItem = ({ title, value, rate, icon }) => {
  return (
    <div className="rounded-3 my-0 mx-5 flex-[1] cursor-pointer p-7 shadow-[0px_0px_15px_-9px_rgba(0,0,0,0.75)]">
      <span className="text-xl">{title}</span>
      <div className="my-3 mx-0 flex items-center">
        <span className="text-3xl font-bold">$ {value}</span>
        <span className="ml-5 flex items-center">
          {rate}
          <span className="ml-1 text-sm text-green-900">{icon}</span>
        </span>
      </div>
      <span className="text-gray-500">Compared to last month</span>
    </div>
  );
};
