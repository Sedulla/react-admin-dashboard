export const NewUser = () => {
  return (
    <div className="flex-[4]">
      <h1 className="">New User</h1>
      <form action="" className="flex flex-wrap ">
        <div className="mt-3 mr-5 flex w-[390px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Username
          </label>
          <input
            required
            type="text"
            className="h-5 rounded border-[1px] border-solid border-[gray] p-3"
            placeholder="username"
          />
        </div>
        <div className="mt-3 mr-5 flex w-[390px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Name and Surname
          </label>
          <input
            required
            type="text"
            className="h-5 rounded border-[1px] border-solid border-[gray] p-3"
            placeholder="name and surname"
          />
        </div>
        <div className="mt-3 mr-5 flex w-[390px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Email
          </label>
          <input
            required
            type="email"
            className="h-5 border-[1px] border-solid border-[gray] p-3"
            placeholder="email"
          />
        </div>
        <div className="mt-3 mr-5 flex w-[390px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Password
          </label>
          <input
            required
            type="password"
            className="h-5 rounded border-[1px] border-solid border-[gray] p-3"
            placeholder="password"
          />
        </div>
        <div className="mt-3 mr-5 flex w-[390px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Phone
          </label>
          <input
            type="tel"
            className="h-5 border-[1px] border-solid border-[gray] p-3"
            placeholder="phone number (optional)"
          />
        </div>
        <div className="mt-3 mr-5 flex w-[390px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Address
          </label>
          <input
            required
            type="text"
            className="h-5 rounded border-[1px] border-solid border-[gray] p-3"
            placeholder="address"
          />
        </div>
        <div className="mt-3 mr-5 flex w-[390px] flex-col">
          <label
            htmlFor="active"
            className="mb-3 font-bold text-[rgb(151,150,150)]"
          >
            Active
          </label>
          <select
            required
            name="active"
            id="active"
            className="h-[39px] rounded"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="mt-[50px] h-9 w-[190px] cursor-pointer rounded-lg border-none bg-blue-900 py-1.5 px-3 font-bold text-white">
          Add
        </button>
      </form>
    </div>
  );
};
