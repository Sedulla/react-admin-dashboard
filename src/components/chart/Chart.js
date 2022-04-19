import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export const Chart = ({ title, data }) => {
  return (
    <div className="shadow-lg m-5 p-5">
      <h3 className="mb-5">{title}</h3>
      <div>
        <Line
          data={data}
          width={300}
          height={300}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};
