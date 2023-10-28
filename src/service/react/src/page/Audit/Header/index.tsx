import React from 'react';
import { HeaderStyle, ShowBalanceStyle } from './index.style';

interface ShowBalanceData {
	totalBudget: number;
	balance: number;
}

const ShowBalance: React.FC<ShowBalanceData> = ({ totalBudget, balance }) => {
	// totalBudget(총 예산[회비]), balance (잔액)은 현준이 API와 연동 후 변경되도록 할 예정 -> 수정 필요
	// 일단 입력값을 주어서 임의로 잔액 설정

	return (
		<div className={ShowBalanceStyle}>
			<div>
				<span>전체 공금</span>
				<span>{totalBudget}원</span>
			</div>
			<div>
				<span>남은 공금</span>
				<span>{balance}원</span>
			</div>
		</div>
	);
};

const AuditDocumentHeader = () => {
	return (
		<div className={HeaderStyle}>
			<span>회계</span>
			<ShowBalance totalBudget={100000} balance={50000} />
		</div>
	);
};

export default AuditDocumentHeader;
