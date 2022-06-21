/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

export const useObserver = (options) => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [isRevealed, setIsRevealed] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// console.log(entry);
				setIsVisible(entry.isIntersecting);
				// if (entry.isIntersecting) {
				// 	observer.unobserve(containerRef.current);
				// }
				if (entry.isIntersecting) setIsRevealed(true);
			});
		}, options);
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [containerRef, isVisible, isRevealed]);

	return [containerRef, isVisible, isRevealed];
};
