import React from 'react';
import { ParticipateStyle, ParticipatedStyle, ParticipationStyle } from './participate.style';

const Participation = () => {
	const ratio = 0.65;
	const message = ['요즘 너무 바쁜거 같아요..', '평균 보다 더 많이 참여했어요!'];
	const progressBar = {
		width: `${ratio * 100}%`,
		height: '100%',
		backgroundColor: '#D9D9D9',
	};

	return (
		<div className={ParticipationStyle}>
			<div>
				<span>참여도 {ratio * 100}%</span>
				<span>{0.5 < ratio ? message[1] : message[0]}</span>
			</div>
			<div>
				<div style={progressBar}></div>
			</div>
		</div>
	);
};

const Activity = () => {
	const date = '09-30';

	return (
		<div>
			<div>{date}</div>
			<div>참여 활동</div>
			<div>활동 보기</div>
		</div>
	);
};

const Participated = () => {
	return (
		<div className={ParticipatedStyle}>
			<span>참여 활동</span>
			<div>
				<Activity />
				<Activity />
				<Activity />
			</div>
		</div>
	);
};

export const Participate = () => {
	return (
		<div className={ParticipateStyle}>
			<Participation />
			<Participated />
		</div>
	);
};

export default Participate;