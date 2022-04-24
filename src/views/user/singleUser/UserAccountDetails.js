import {
  MdPermIdentity as PermIdentityIcon,
  MdCalendarToday as CalendarTodayIcon,
  MdMailOutline as MailOutlineIcon,
  MdPhoneAndroid as PhoneAndroidIcon,
  MdLocationOn as LocationOnIcon,
} from 'react-icons/md';

export const UserAccountDetails = () => {
  return (
    <div className="flex-[1] p-5 shadow-lg">
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/2txcJMg/blank-profile-picture.png"
          alt=""
          className="h-9 w-9 rounded-3xl object-cover"
        />
        <div className="flex flex-col ml-3">
          <span className="font-bold">anonymous</span>
          <span className="font-light">unknown</span>
        </div>
      </div>
      <div className="mt-5">
        <span className="text-bold text-[rgb(175,175,171)]">
          Account Details
        </span>
        <div className="my-5 mx-0 flex items-center text-[#444]">
          <PermIdentityIcon className="mr-1 text-base" />
          <span className="">Anonymous</span>
        </div>
        <div className="text-[#444 my-5 mx-0 flex items-center">
          <CalendarTodayIcon className="mr-1 text-base" />
          <span className="">00.00.0000</span>
        </div>
        <span className="text-bold text-[rgb(175,175,171)]">
          Contact Details
        </span>
        <div className="text-[#444 my-5 mx-0 flex items-center">
          <MailOutlineIcon className="mr-1 text-base" />
          <span className="">@gmail.com</span>
        </div>
        <div className="text-[#444 my-5 mx-0 flex items-center">
          <PhoneAndroidIcon className="mr-1 text-base" />
          <span className="">+994</span>
        </div>
        <div className="text-[#444 my-5 mx-0 flex items-center">
          <LocationOnIcon className="mr-1 text-base" />
          <span className="">Worldwide</span>
        </div>
      </div>
    </div>
  );
};
