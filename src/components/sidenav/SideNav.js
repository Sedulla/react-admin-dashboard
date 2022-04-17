import { SideNavMenu } from './SideNavMenu';
import { navigation } from '../../utils/navigation';

export const Side = () => {
  return (
    <>
      <div className="bg-[rgb(251, 251, 255)] sticky top-11 h-[calc(100vh-50px)] flex-[1]">
        <div className="p-5 text-[#555]">
          <SideNavMenu items={navigation} />
        </div>
      </div>
    </>
  );
};
