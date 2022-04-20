import { Link } from 'react-router-dom';
import { UserAccountDetails } from './UserAccountDetails';
import { UserEditForm } from './UserEditForm';

export const SingleUser = () => {
  return (
    <div className="flex-[4] p-5">
      {/* title */}
      <div className="flex items-center justify-between">
        <h1 className="">Edit User</h1>
        <Link to="/user/new">
          <button className="w-21 cursor-pointer rounded border-none bg-[teal] p-1.5 text-base text-white">
            Add New User
          </button>
        </Link>
      </div>
      <div className="mt-5 flex">
        <UserAccountDetails />
        <UserEditForm />
      </div>
    </div>
  );
};
