/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

const Icon = ({ type = '', ...props }) => {
	const [hovering, hoveringSet] = useState(false);

	const handleMouseHover = () => hoveringSet(true);
	const handleMouseHoverLeave = () => hoveringSet(false);

	if (type === 'facebook') {
		return (
			<svg
				onMouseEnter={handleMouseHover}
				onMouseLeave={handleMouseHoverLeave}
				fill={hovering ? '#C4AC86' : 'none'}
				width="13"
				height="22"
				viewBox="0 0 13 22"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
					stroke="#C4AC86"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	if (type === 'instagram') {
		return (
			<svg
				onMouseEnter={handleMouseHover}
				onMouseLeave={handleMouseHoverLeave}
				fill={hovering ? '#C4AC86' : 'none'}
				width="22"
				height="22"
				viewBox="0 0 22 22"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"
					stroke={hovering ? '#161C24' : '#C4AC86'}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15.0002 10.3698C15.1236 11.2021 14.9815 12.052 14.594 12.7988C14.2065 13.5456 13.5933 14.1512 12.8418 14.5295C12.0903 14.9077 11.2386 15.0394 10.408 14.9057C9.57732 14.7721 8.80996 14.3799 8.21503 13.785C7.62011 13.1901 7.22793 12.4227 7.09426 11.592C6.9606 10.7614 7.09226 9.90971 7.47052 9.15819C7.84878 8.40667 8.45438 7.79355 9.20118 7.40605C9.94798 7.01856 10.7979 6.8764 11.6302 6.99981C12.4791 7.1257 13.265 7.52128 13.8719 8.12812C14.4787 8.73496 14.8743 9.52089 15.0002 10.3698Z"
					stroke={hovering ? '#161C24' : '#C4AC86'}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.5 5.5H16.51"
					stroke={hovering ? '#161C24' : '#C4AC86'}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	if (type === 'linkedin') {
		return (
			<svg
				onMouseEnter={handleMouseHover}
				onMouseLeave={handleMouseHoverLeave}
				fill={hovering ? '#C4AC86' : 'none'}
				width="22"
				height="21"
				viewBox="0 0 22 21"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M15 7C16.5913 7 18.1174 7.63214 19.2426 8.75736C20.3679 9.88258 21 11.4087 21 13V20H17V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V20H9V13C9 11.4087 9.63214 9.88258 10.7574 8.75736C11.8826 7.63214 13.4087 7 15 7V7Z"
					stroke="#C4AC86"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M5 8H1V20H5V8Z" stroke="#C4AC86" strokeLinecap="round" strokeLinejoin="round" />
				<path
					d="M3 5C4.10457 5 5 4.10457 5 3C5 1.89543 4.10457 1 3 1C1.89543 1 1 1.89543 1 3C1 4.10457 1.89543 5 3 5Z"
					stroke="#C4AC86"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	if (type === 'twitter') {
		return (
			<svg
				onMouseEnter={handleMouseHover}
				onMouseLeave={handleMouseHoverLeave}
				fill={hovering ? '#C4AC86' : 'none'}
				width="24"
				height="20"
				viewBox="0 0 24 20"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006V1.01006Z"
					stroke="#C4AC86"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	}

	return null;
};

export default Icon;
