import {
  MdNotificationsNone as NotificationNoneIcon,
  MdLanguage as LanguageIcon,
  MdSettings as SettingsIcon,
} from 'react-icons/md';

export const Nav = () => {
  return (
    <>
      <div className="sticky top-0 z-[999] h-11 w-full bg-white">
        <div className="flex h-full items-center justify-between py-0 px-5">
          <div className="">
            <span class="cursor-pointer text-xl font-bold text-blue-900">
              Logo
            </span>
          </div>
          <div className="flex items-center">
            <div className="relative mr-3 cursor-pointer">
              <NotificationNoneIcon />
              <span className="absolute -top-1 right-1 flex h-3 w-3 items-center justify-center rounded-3xl bg-red-700 text-xs text-white ">
                3
              </span>
            </div>
            <div className="relative mr-3 cursor-pointer ">
              <LanguageIcon />
              <span className="absolute -top-1 right-1 flex h-3 w-3 items-center justify-center rounded-3xl bg-red-700 text-xs text-white ">
                3
              </span>
            </div>
            <div className="relative mr-3 cursor-pointer ">
              <SettingsIcon />
            </div>
            <img
              src=""
              alt="img.png"
              className="h-9 w-9 cursor-pointer rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};
