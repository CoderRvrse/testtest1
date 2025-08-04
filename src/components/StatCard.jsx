import { motion } from 'framer-motion';
export function StatCard({ icon: Icon, title, value, change, changeType = 'increase' }) {
  const isIncrease = changeType === 'increase';
  const changeColor = isIncrease ? 'text-green-400' : 'text-red-500';
  return (
    <motion.div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col" whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
      <div className="flex items-center justify-between mb-4"><p className="text-sm font-medium text-gray-400">{title}</p><Icon className="text-gray-500" size={24} /></div>
      <div><h2 className="text-3xl font-bold text-white">{value}</h2><p className={`text-sm mt-1 font-semibold ${changeColor}`}>{change}</p></div>
    </motion.div>
  );
}
