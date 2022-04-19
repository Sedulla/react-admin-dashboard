import { Chart } from '../components/chart/Chart';
import { FeaturedInfo } from '../components/featuredInfo/FeaturedInfo';
import { userData } from '../utils/userChartData';

export const Homepage = () => {
  return (
    <div className="flex-[4]">
      <FeaturedInfo />
      <Chart title="User Analytics Graphic" data={userData} />
    </div>
  );
};
