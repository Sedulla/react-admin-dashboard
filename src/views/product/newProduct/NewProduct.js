export const NewProduct = () => {
  return (
    <div className="flex-[5]">
      <h1 className="">New Product Page</h1>
      <form action="" className="">
        <div className="mr-5 flex w-[250px] flex-col">
          <label
            htmlFor="file"
            className="mt-3 mb-3 font-bold text-[rgb(151,150,150)]"
          >
            Image
          </label>
          <input type="file" id="file" className="p-3" />
        </div>
        <div className="mt-3 mr-5 flex w-[250px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Name
          </label>
          <input type="text" className=" p-3" placeholder="Samsung Tab S7" />
        </div>
        <div className="mt-3 mr-5 flex w-[250px] flex-col">
          <label htmlFor="" className="mb-3 font-bold text-[rgb(151,150,150)]">
            Stock
          </label>
          <input type="number" className=" p-3" placeholder="3" />
        </div>
        <div className="mt-3 mr-5 flex w-[250px] flex-col">
          <label
            htmlFor="active"
            className="mb-3 font-bold text-[rgb(151,150,150)]"
          >
            Active
          </label>
          <select name="active" id="active" className="p-3">
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
