import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentBodyDateStyle } from './date.style';

const AuditDocumentBodyDate = (props: {
	date: string;
	setDate: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { date, setDate, isEditting } = props;

	return (
		<div className={AuditDocumentBodyDateStyle}>
			<div>
				<span>일 자</span>
			</div>
			<div>
				{isEditting ? (
					<input type="text" value={date} onChange={event => setDate(event.target.value)} />
				) : (
					<span>{date}</span>
				)}
			</div>
		</div>
	);
};

export default AuditDocumentBodyDate;
