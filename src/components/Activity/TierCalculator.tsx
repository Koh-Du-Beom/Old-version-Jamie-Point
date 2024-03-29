/*eslint-disable*/
import { useEffect, useState } from "react";
import classes from '../../styles/FormStyles.module.css';

interface TierCalculatorProps{
	selectedType : string;
}

const TierCalculator: React.FC<TierCalculatorProps> = ({selectedType}) => {
	
	const [prevBigTier, setPrevBigTier] = useState<string>('');
	const [prevTier, setPrevTier] = useState('');

	const [currentBigTier, setCurrentBigTier] = useState<string>('');
	const [currentTier, setCurrentTier] = useState<string>('');

	const bojBigTiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby'];
	const bojSmallTiers = ['I', 'II', 'III', 'IV', 'V'];
	const programmersTiers = ['Lv.0', 'Lv.1', 'Lv.2', 'Lv.3', 'Lv.4', 'Lv.5'];
	
	const [point, setPoint] = useState<number>(0);

	const handlePrevBigTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setPrevBigTier(event.target.value);
		setPrevTier('');
	};

	// 선택한 큰 티어에 따라 작은 티어 선택지 생성
	const getBojPrevTierOptions = () => {
		if (!prevBigTier) return []; 
		return bojSmallTiers.map(smallTier => `${prevBigTier} ${smallTier}`);
	};

	const handleCurrentBigTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrentBigTier(event.target.value);
		setCurrentTier('');
	};

	const getBojCurrentTierOptions = () => {
		if (!currentBigTier) return []; 
		return bojSmallTiers.map(smallTier => `${currentBigTier} ${smallTier}`);
	};

	const handleProgPrevTierChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setPrevTier(event.target.value);
	}

	const handleProgCurrentTierChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
		setCurrentTier(event.target.value);
	}

	return (
		//큰 티어 작은 티어 선택하는거 다시 고민해보기
		
		<div className={`${classes.wrapper} ${classes.double}`}>
			<div className={classes.wrapper}>
				<div className={classes.small_title}>이전 티어 선택</div>		
					
				{selectedType === '프로그래머스 1레벨/2레벨/3레벨 이상' ? (
					<div className={classes.wrapper}>
						<select value={prevTier} onChange={handleProgPrevTierChange}>
							<option value="">이전 티어를 선택해주세요</option>
							{programmersTiers.map((tier, index) => <option key={index} value={tier}>{tier}</option>)}
						</select>	
					</div>
				) : (
					<>
						<div className={classes.wrapper}>
							<select value={prevBigTier} onChange={handlePrevBigTierChange}>
								<option value="">큰 티어를 선택해주세요</option>
								{bojBigTiers.map((tier, index) => <option key={index} value={tier}>{tier}</option>)}
							</select>
						</div>
						{prevBigTier? (
							<div className={classes.wrapper}>
								<select value={prevTier} onChange={(e) => setPrevTier(e.target.value)}>
									<option value="">전체 티어를 선택해주세요</option>
									{getBojPrevTierOptions().map((option, index) => <option key={index} value={option}>{option}</option>)}
								</select>	
							</div>
						) : null}
						
					</>)}
			</div>
			<div className={classes.wrapper}>
				<div className={classes.small_title}>현재 티어 선택</div>
				{selectedType === '프로그래머스 1레벨/2레벨/3레벨 이상' ? (
					<div className={classes.wrapper}>
						<select value={currentTier} onChange={handleProgCurrentTierChange}>
							<option value="">현재 티어를 선택해주세요</option>
							{programmersTiers.map((tier, index) => <option key={index} value={tier}>{tier}</option>)}
						</select>	
					</div>
				) : (
					<>
						<div className={classes.wrapper}>
							<select value={currentBigTier} onChange={handleCurrentBigTierChange}>
								<option value="">큰 티어를 선택해주세요</option>
								{bojBigTiers.map((tier, index) => <option key={index} value={tier}>{tier}</option>)}
							</select>
						</div>
						{currentBigTier ? (
							<div className={classes.wrapper}>
								<select value={currentTier} onChange={(e) => setCurrentTier(e.target.value)}>
									<option value="">전체 티어를 선택해주세요</option>
									{getBojCurrentTierOptions().map((option, index) => <option key={index} value={option}>{option}</option>)}
								</select>
							</div>
						) : null}
						
					</>)}
					
					
			</div>
		</div>
	);
}

export default TierCalculator;