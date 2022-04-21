import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline as DeleteIcon } from 'react-icons/md';
import { productRows } from '../../../utils/userSampleData';
import { Link } from 'react-router-dom';

export const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleRowDelete = (id) => {
    const newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              src={params.row.img}
              alt=""
              className="mr-3 h-7 w-7 rounded-lg object-cover"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 170,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 190,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="mr-5 cursor-pointer rounded-sm border-none bg-[#3bb077] py-1 px-3 text-white">
                Edit
              </button>
            </Link>

            <DeleteIcon
              className="cursor-pointer text-[brown]"
              onClick={() => handleRowDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="flex-[4]">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
