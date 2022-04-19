import { MdVisibility as VisibilityIcon } from 'react-icons/md';

export const WidgetSmItem = () => {
  return (
    <>
      <li className="my-5 mx-0 flex items-center justify-between">
        <img src="" alt="img.png" className="h-9 w-9 rounded-3xl object-none" />
        <div className="flex flex-col">
          <span className="font-bold">Ali Qureshi</span>
          <span className="font-light">Normal person</span>
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
