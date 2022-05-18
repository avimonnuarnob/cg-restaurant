/* eslint-disable react/jsx-props-no-spreading */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DecorSvg = (props) => {
	const { ref, inView } = useInView({
		threshold: 0.25,
	});
	return (
		<motion.svg xmlns="http://www.w3.org/2000/svg" width={41.125} height={9.146} {...props} ref={ref}>
			<motion.path
				initial={{ pathLength: 0 }}
				animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
				transition={{ duration: 2, ease: 'easeInOut' }}
				fill="none"
				stroke="#9C7C57"
				d="M40.881 8.576 20.562.591.244 8.576"
			/>
			<motion.path
				initial={{ pathLength: 0 }}
				animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
				transition={{ duration: 2, ease: 'easeInOut' }}
				fill="none"
				stroke="#9C7C57"
				d="M40.881.591 20.562 8.576.243.591"
			/>
		</motion.svg>
	);
};

export default DecorSvg;
