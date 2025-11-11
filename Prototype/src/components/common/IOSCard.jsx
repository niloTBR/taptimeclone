import { motion } from 'framer-motion'
import styles from './IOSCard.module.scss'

const IOSCard = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: hover ? { y: -4, scale: 1.02 } : {}
  }

  return (
    <motion.div
      className={`${styles.card} ${styles[variant]} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default IOSCard