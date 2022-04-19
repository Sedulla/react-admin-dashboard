import { WidgetLgItem } from './WidgetLgItem';

export const WidgetLg = () => {
  return (
    <div className="flex-2 p-5 shadow-lg">
      <h3 className="text-xl font-bold">Latest transactions</h3>
      <table className="ml-3 w-[590px] [border-spacing:1.25rem]">
        <tr className="">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
          <th className="text-left">View</th>
        </tr>
        <WidgetLgItem />
        <WidgetLgItem />
        <WidgetLgItem />
        <WidgetLgItem />
        <WidgetLgItem />
      </table>
    </div>
  );
};
