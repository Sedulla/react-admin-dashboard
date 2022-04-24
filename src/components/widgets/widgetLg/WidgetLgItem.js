import { MdVisibility as VisibilityIcon } from 'react-icons/md';

export const WidgetLgItem = () => {
  const Button = ({ type }) => {
    return (
      <button type="button" className="bg-[#e5faf2] text-[#3bb077]">
        {type}
      </button>
    );
  };

  return (
    <tr className="">
      <td className="flex h-16 items-center font-bold">
        <img src="https://i.ibb.co/2txcJMg/blank-profile-picture.png" alt="" className="mr-3 h-9 w-9 rounded-3xl object-cover" />
        <span className="">Anonymous</span>
      </td>
      <td className="font-light">19 April 2022</td>
      <td className="font-light">$11,000</td>
      <td className="">
        <Button type="Paid" />
      </td>
      <td className="">
        <button type="button" className="rounded-lg border-none py-1 px-1.5">
          <VisibilityIcon className="mr-1 text-base" />
        </button>
      </td>
    </tr>
  );
};
