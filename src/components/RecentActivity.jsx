import { motion } from 'framer-motion';
export function RecentActivity({ activityItems }) {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } }, };
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 }, };
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full">
      <h2 className="text-white font-semibold text-xl mb-4">Recent Activity</h2>
      <motion.ul className="space-y-5" variants={containerVariants} initial="hidden" animate="visible">
        {activityItems.map((item, index) => (
          <motion.li key={index} className="flex items-center" variants={itemVariants}>
            <img src={item.avatarUrl} alt={`${item.actor}'s avatar`} className="w-10 h-10 rounded-full" />
            <div className="ml-4 flex-grow"><p className="text-sm text-gray-200">{item.action}</p><p className="text-xs text-gray-500">{item.timestamp}</p></div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
