import { WidgetSmItem } from './WidgetSmItem';

export const WidgetSm = () => {
  return (
    <div className="mr-5 flex-[1] p-5 shadow-lg">
      <span className="text-3xl font-bold">New Join Members</span>
      <ul className="m-0 list-none p-0">
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
      </ul>
    </div>
  );
};
