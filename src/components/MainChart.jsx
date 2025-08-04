import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler );
export function MainChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Monthly Revenue', data: [1200, 1900, 3000, 5000, 2300, 3100, 4200], borderColor: '#38bdf8',
        backgroundColor: (context) => { const ctx = context.chart.ctx; const g = ctx.createLinearGradient(0,0,0,200); g.addColorStop(0,'rgba(56,189,248,0.4)'); g.addColorStop(1,'rgba(56,189,248,0)'); return g; },
        tension: 0.4, pointBackgroundColor: '#38bdf8', pointBorderColor: '#fff', pointHoverRadius: 7, pointRadius: 5, fill: true,
    }],
  };
  const options = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'top', labels: { color: '#cbd5e1', font: { size: 14 } } }, title: { display: false }, },
    scales: { x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(71,85,105,0.5)' } }, y: { ticks: { color: '#94a3b8', callback: function(v){return '$'+v/1000+'k';} }, grid: { color: 'rgba(71,85,105,0.5)' } }, },
  };
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-96">
      <h2 className="text-white font-semibold text-xl mb-4">Revenue Overview</h2>
      <div className="h-[calc(100%-40px)]"><Line options={options} data={data} /></div>
    </div>
  );
}
