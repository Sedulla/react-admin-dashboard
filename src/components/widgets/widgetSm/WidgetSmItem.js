import { MdVisibility as VisibilityIcon } from 'react-icons/md';

export const WidgetSmItem = () => {
  return (
    <>
      <li className="my-5 mx-0 flex items-center justify-between">
        <img
          src="https://i.ibb.co/2txcJMg/blank-profile-picture.png"
          alt="img.png"
          className="h-9 w-9 rounded-3xl object-cover"
        />
        <div className="flex flex-col">
          <span className="font-bold">Anonymous</span>
          <span className="font-light">unknown</span>
        </div>
        <button
          type="button"
          className="flex cursor-pointer items-center rounded-lg border-none bg-[#eeeef7] py-3 px-3 text-[#555]"
        >
          <VisibilityIcon className="mr-1 text-base" />
          Display
        </button>
      </li>
    </>
  );
};
