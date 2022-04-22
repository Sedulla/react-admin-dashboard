import { Link } from 'react-router-dom';
import { Chart } from '../../../components/chart/Chart';
import { productData } from '../../../utils/userSampleData';
import { MdPublish as PublishIcon } from 'react-icons/md';

export const SingleProduct = () => {
  return (
    <div className="flex-[5] p-5">
      <div className="flex items-center justify-between">
        <h1 className="">dada</h1>
        <Link to="/product/new" className="link">
          <button className="w-[79px] cursor-pointer rounded border-none bg-[teal] p-1 text-white"></button>
        </Link>
      </div>

      <div className="flex ">
        <div className="flex-[1]">
          <Chart data={productData} title="Sales Performance Graphic" />
        </div>
        <div className="m-5 flex-[1] p-5 shadow-lg">
          <div className="flex items-center ">
            <img
              src=""
              alt=""
              className="mr-[19px] h-[39px] w-[39px] object-cover"
            />
            <span className="text-bold">Samsung Tab S7</span>
          </div>
          <div className="mt-3">
            <div className="flex w-[150px] justify-between">
              <span className="">Id:</span>
              <span className="">1</span>
            </div>
            <div className="flex w-[150px] justify-between">
              <span className="">Price:</span>
              <span className="">$300.00</span>
            </div>
            <div className="flex w-[150px] justify-between">
              <span className="">Sales:</span>
              <span className="">$111</span>
            </div>
            <div className="flex w-[150px] justify-between">
              <span className="">Active:</span>
              <span className="">1</span>
            </div>
            <div className="flex w-[150px] justify-between">
              <span className="">Stock:</span>
              <span className="">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5 flex-[1] p-5 shadow-lg">
        <form action="" className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="" className="mb-3 text-[gray]">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Samsung Tab S7"
              className="border-b-solid mb-3 border-b-[1px]  border-b-[gray] p-1 focus:outline-none"
            />
            <label htmlFor="stock" className="mb-3 text-[gray]">
              Stock
            </label>
            <select name="stock" id="stock" className="mb-3">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active" className="mb-3 text-[gray]">
              Active
            </label>
            <select name="active" id="active" className="mb-3">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex items-center">
              <img
                src=""
                alt="img.png"
                className="height-[99px] mr-5 w-[99px] rounded-[9px] object-cover"
              />
              <label htmlFor="file" className="">
                <PublishIcon />
              </label>
              <input type="file" className="hidden" />
            </div>
            <button className="text-bold cursor-pointer rounded border-none bg-blue-900 text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
