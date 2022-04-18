import { Line } from 'react-chartjs-2';

export const Chart = () => {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return (
    <div className="m-5 p-5 shadow-[0px_0px_15px_-9px_rgba(0,0,0,0.75)]">
      <h3 className="mb-5">Sales Analytics Graphic</h3>
      <div>
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};
