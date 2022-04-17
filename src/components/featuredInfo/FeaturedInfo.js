import { MdArrowUpward as ArrowUpwardIcon } from 'react-icons/md';
import { FeaturedInfoItem } from './FeaturedInfoItem';

export const FeaturedInfo = () => {
  return (
    <div className="flex w-full justify-between">
      <FeaturedInfoItem
        title="Revenue"
        value="3,135"
        rate="+11.5"
        icon={<ArrowUpwardIcon />}
      />
      <FeaturedInfoItem
        title="Sales"
        value="1,755"
        rate="+11.5"
        icon={<ArrowUpwardIcon />}
      />
      <FeaturedInfoItem
        title="Cost"
        value="5,315"
        rate="+11.5"
        icon={<ArrowUpwardIcon />}
      />
    </div>
  );
};
