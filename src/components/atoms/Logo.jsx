import { motion } from 'framer-motion';
import React from 'react';

const Logo = ({ outlined = false, height = 50, width = 50 }) => {
	if (outlined) {
		return (
			<motion.svg
				style={{ marginTop: '5px' }}
				width={width}
				height={height}
				viewBox="0 0 73 84"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
					d="M9.87569 26.2639L10.4981 68.5457L0.5 62.8497V20.2675L13.4514 12.543H16.5102L56.015 36.2485L36.8911 47.7305L36.1326 48.1859L36.914 48.6008L55.7331 58.5926L55.7542 58.6039L55.7764 58.613L58.8467 59.8835L59.1405 60.0051L59.3753 59.7905L62.4588 56.9716L62.6215 56.823V56.6026V15.6577L72.5 20.4167V63.094L57.6423 71.1435L16.7561 47.6453L36.4957 36.4183L37.2658 35.9803L36.4929 35.5474L14.3255 23.1337L14.0466 22.9775L13.7877 23.1652L10.0822 25.8517L9.87187 26.0042L9.87569 26.2639Z"
					stroke="#C4AC86"
				/>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
					d="M51.3651 8.61595V19.3984L27.3836 6.49874L37.1573 0.579328L51.3651 8.61595Z"
					stroke="#C4AC86"
				/>
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
					d="M46.8169 77.6473L38.148 83.3071L21.7676 74.1228V63.3655L46.8169 77.6473Z"
					stroke="#C4AC86"
				/>
			</motion.svg>
		);
	}

	return (
		<svg
			style={{ marginTop: '5px' }}
			width={width}
			height={height}
			viewBox="0 0 35 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M29.6198 7.08628V26.9885L28.1496 28.3325L26.6856 27.7268L17.7126 22.9626L27.1715 17.2835L7.93816 5.74222H6.34801L0 9.52831V30.1057L5.25004 33.0967L4.94715 12.5193L6.71399 11.2384L17.2835 17.1573L7.50907 22.7165L27.4807 34.1947L34.8068 30.2256V9.5851L29.6198 7.08628Z"
				fill="#C4AC86"
			/>
			<path d="M12.5762 3.1109L24.7295 9.64821V3.96908L17.7126 0L12.5762 3.1109Z" fill="#C4AC86" />
			<path d="M10.1406 35.4819L18.1987 40L22.7798 37.009L10.1406 29.8028V35.4819Z" fill="#C4AC86" />
		</svg>
	);
};

export default Logo;
