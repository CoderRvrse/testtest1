import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, TrendingDown, Info } from 'lucide-react';
const insightMeta = {
  positive: { Icon: TrendingUp, color: 'text-green-400' },
  negative: { Icon: TrendingDown, color: 'text-red-500' },
  neutral: { Icon: Info, color: 'text-sky-400' },
};
export function AiInsights({ insights }) {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, };
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center mb-4"><Lightbulb className="text-yellow-400" size={24} /><h2 className="text-white font-semibold text-xl ml-3">AI Insights</h2></div>
      <motion.ul className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        {insights.map((insight, index) => {
          const { Icon, color } = insightMeta[insight.type] || insightMeta.neutral;
          return (
            <motion.li key={index} className="flex items-start" variants={itemVariants}>
              <Icon className={`${color} mt-1 flex-shrink-0`} size={18} />
              <div className="ml-3"><p className="font-semibold text-gray-200">{insight.title}</p><p className="text-sm text-gray-400">{insight.description}</p></div>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
