import { useState } from "react";
import classes from '../../styles/FormStyles.module.css';

const TierCalculator: React.FC = () => {

	const [prevBigTier, setPrevBigTier] = useState<string>('');
	const [prevTier, setPrevTier] = useState('');

	const [currentBigTier, setCurrentBigTier] = useState<string>('');
	const [currentTier, setCurrentTier] = useState<string>('');

	const bigTiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby'];
	const smallTiers = ['I', 'II', 'III', 'IV', 'V'];

	
	const handlePrevBigTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setPrevBigTier(event.target.value);
		setPrevTier('');
	};

	// 선택한 큰 티어에 따라 작은 티어 선택지 생성
	const getPrevTierOptions = () => {
		if (!prevBigTier) return []; // 큰 티어가 선택되지 않았다면 빈 배열 반환
		return smallTiers.map(smallTier => `${prevBigTier} ${smallTier}`);
	};

	const handleCurrentBigTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrentBigTier(event.target.value);
		setCurrentTier('');
	};

	const getCurrentTierOptions = () => {
		if (!currentBigTier) return []; // 큰 티어가 선택되지 않았다면 빈 배열 반환
		return smallTiers.map(smallTier => `${currentBigTier} ${smallTier}`);
	};

	return (
		//큰 티어 작은 티어 선택하는거 다시 고민해보기
		<div className={`${classes.wrapper} ${classes.double}`}>
			<div className={classes.wrapper}>
				<div className={classes.small_title}>이전 티어 선택</div>
				{prevBigTier && !prevTier ? (
					<select value={prevTier} onChange={(e) => setPrevTier(e.target.value)}>
						<option value="">전체 티어를 선택해주세요</option>
						{getPrevTierOptions().map((option, index) => <option key={index} value={option}>{option}</option>)}
					</select>
				) : (
					<select value={prevBigTier} onChange={handlePrevBigTierChange}>
						<option value="">큰 티어를 선택해주세요</option>
						{bigTiers.map((tier, index) => <option key={index} value={tier}>{tier}</option>)}
					</select>
				)}
			</div>
			<div className={classes.wrapper}>
				<div className={classes.small_title}>현재 티어 선택</div>
				{currentBigTier && !currentTier ? (
					<select value={currentTier} onChange={(e) => setCurrentTier(e.target.value)}>
						<option value="">전체 티어를 선택해주세요</option>
						{getCurrentTierOptions().map((option, index) => <option key={index} value={option}>{option}</option>)}
					</select>
				) : (
					<select value={currentBigTier} onChange={handleCurrentBigTierChange}>
						<option value="">큰 티어를 선택해주세요</option>
						{bigTiers.map((tier, index) => <option key={index} value={tier}>{tier}</option>)}
					</select>
				)}
			</div>
		</div>
	);
}

export default TierCalculator;