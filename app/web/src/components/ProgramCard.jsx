import React from 'react';
import { motion } from 'framer-motion';

function ProgramCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-semibold leading-snug">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProgramCard;