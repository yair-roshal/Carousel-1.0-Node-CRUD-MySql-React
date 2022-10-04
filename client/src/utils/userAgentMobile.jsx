export const userAgentMobile = () => {
	if (
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
			navigator.userAgent,
		)
	) {
		console.log('mobile');
		return true;
	} else {
		console.log('pc');
		return false;
	}
};
