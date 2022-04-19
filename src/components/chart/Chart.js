import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export const Chart = ({ title, data }) => {
  return (
    <div className="m-5 p-5 shadow-[0px_0px_15px_-9px_rgba(0,0,0,0.75)]">
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
