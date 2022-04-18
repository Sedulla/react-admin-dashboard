import { Chart } from '../components/chart/Chart';
import { FeaturedInfo } from '../components/featuredInfo/FeaturedInfo';

export const Homepage = () => {
  return (
    <div className="flex-[4]">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};
