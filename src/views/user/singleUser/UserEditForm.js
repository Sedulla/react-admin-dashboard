import { MdPublish as PublishIcon } from 'react-icons/md';

export const UserEditForm = () => {
  return (
    <div className="ml-5 flex-[3] p-5 shadow-lg">
      <span className="text-bold text-[23px]">Edit</span>
      <form action="" className="mr-5 flex justify-between">
        <div className="">
          <div className="mt-[9] flex flex-col">
            <label htmlFor="" className="font-sm mb-1">
              Username
            </label>
            <input
              type="text"
              className=" w-[250] border-b-[1px] border-solid border-[gray]"
              placeholder="username"
            />
          </div>
          <div className="mt-[9] flex flex-col">
            <label htmlFor="" className="font-sm mb-1">
             Birhtdate
            </label>
            <input
              type="text"
              className=" w-[250] border-b-[1px] border-solid border-[gray]"
              placeholder="date"
            />
          </div>
          <div className="mt-[9] flex flex-col">
            <label htmlFor="" className="font-sm mb-1">
              Email
            </label>
            <input
              type="email"
              className=" w-[250] border-b-[1px] border-solid border-[gray]"
              placeholder="email"
            />
          </div>
          <div className="mt-[9] flex flex-col">
            <label htmlFor="" className="font-sm mb-1">
              Phone
            </label>
            <input
              type="tel"
              className=" w-[250] border-b-[1px] border-solid border-[gray]"
              placeholder="phone"
            />
          </div>
          <div className="mt-[9] flex flex-col">
            <label htmlFor="" className="font-sm mb-1">
              Address
            </label>
            <input
              type="text"
              className=" w-[250] border-b-[1px] border-solid border-[gray]"
              placeholder="address"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center ">
            <img
              src=""
              alt="img.png"
              className="mr-5 h-[90px] w-[90px] rounded-xl object-cover "
            />
            <label htmlFor="file">
              <PublishIcon className="cursor-pointer" />
            </label>
            <input type="file" className="hidden" id="file" />
          </div>
          <button className="text-bold cursor-pointer rounded border-none bg-blue-900 p-1 text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
