import { Chart } from '../components/chart/Chart';
import { FeaturedInfo } from '../components/featuredInfo/FeaturedInfo';
import { WidgetLg } from '../components/widgets/widgetLg/WidgetLg';
import { WidgetSm } from '../components/widgets/widgetSm/WidgetSm';
import { userData } from '../utils/userSampleData';

export const Homepage = () => {
  return (
    <div className="flex-[4]">
      <FeaturedInfo />
      <Chart title="User Analytics Graphic" data={userData} />
      <div className="m-5 flex">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
