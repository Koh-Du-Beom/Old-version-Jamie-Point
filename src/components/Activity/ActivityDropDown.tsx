/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import ActivityDropDownData from '../../stores/data/ActivityDropDown.data';
import styled from 'styled-components';

interface ActivityDropDownProps {
	selectedArea?: string;
	onDropDownChange : (selectedData : {
		selectedProgram: string | null;
		selectedType : string | null;
		selectedTopic : string | null;
		selectedPoint : number | null;
	}) => void;
}

interface Point {
  topic: string;
  point: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  //스타일 고민
`

const Selection = styled.div`
  margin: 20px 0;
`

const ActivityDropDown: React.FC<ActivityDropDownProps> = ({selectedArea, onDropDownChange}) => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const handleProgramChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProgram(event.target.value);
    setSelectedType(null);
    setSelectedTopic(null);
    setSelectedPoint(null);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedTypeValue = event.target.value;
		setSelectedType(selectedTypeValue);
		setSelectedTopic('');
		setSelectedPoint(0); // 기본값 설정

		const foundType = ActivityDropDownData.find(area => area.area === selectedArea)
			?.programs.find(program => program.program === selectedProgram)
			?.types.find(type => type.type === selectedTypeValue);

		if (foundType && foundType.points && foundType.points.length > 0) {
			setSelectedPoint(foundType.points[0].point);
		}

		setTimeout(() => {
			onDropDownChange({
				selectedProgram,
				selectedType: selectedTypeValue, // 여기서 비동기프로그래밍 정확히 느낌
				selectedTopic: '',
				selectedPoint: foundType ? foundType.points[0].point : 0
			});
		}, 0);
	};
	

  const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTopicValue = event.target.value;
    setSelectedTopic(selectedTopicValue);

    const foundPoint = ActivityDropDownData.find(area => area.area === selectedArea)
      ?.programs.find(program => program.program === selectedProgram)
      ?.types.find(type => type.type === selectedType)
      ?.points.find(point => point.topic === selectedTopicValue);
    if (foundPoint) {
      setSelectedPoint(foundPoint.point);
    }

		setTimeout(()=>{
			onDropDownChange({
				selectedProgram,
				selectedType,
				selectedTopic : selectedTopic,
				selectedPoint: foundPoint ? foundPoint.point : null,
			});
		}, 0); 
  };

	// useEffect(()=>{
	// 	console.log(selectedProgram, selectedType,`토픽 : ${selectedTopic} ${typeof selectedTopic}`, selectedPoint);
	// }, [selectedProgram, selectedType, selectedTopic, selectedPoint])

	useEffect(()=>{
		setSelectedProgram(null);
		setSelectedType(null);
		setSelectedTopic(null);
		setSelectedPoint(null);
	}, [selectedArea]) // 페이지 옮기고 option 초기화하기

  return (
    <Container>
      <Wrapper>
        <Selection>
          {selectedArea && (
            <select value={selectedProgram ?? ''} onChange={handleProgramChange}>
              <option value="">프로그램을 선택해주세요</option>
              {ActivityDropDownData.find(area => area.area === selectedArea)?.programs.map((program, index) => (
                <option key={index} value={program.program}>{program.program}</option>
              ))}
            </select>
          )}
        </Selection>
        
        <Selection>
          {selectedProgram && (
            <select value={selectedType ?? ''} onChange={handleTypeChange}>
              <option value="">종류를 선택해주세요</option>
              {ActivityDropDownData.find(area => area.area === selectedArea)
                ?.programs.find(program => program.program === selectedProgram)
                ?.types.map((type, index) => (
                  <option key={index} value={type.type}>{type.type}</option>
              ))}
            </select>
          )}
        </Selection>
      
        {/* <Selection>
          {selectedType && selectedTopic !== '' && (
            <select value={selectedTopic ?? ''} onChange={handleTopicChange}>
              <option value="">주제를 선택해주세요</option>
              {ActivityDropDownData.find(area => area.area === selectedArea)
                ?.programs.find(program => program.program === selectedProgram)
                ?.types.find(type => type.type === selectedType)
                ?.points.map((point, index) => (
                  <option key={index} value={point.topic}>{point.topic}</option>
              ))}
            </select>
          )}
        </Selection> */}

				<Selection>
					{selectedType && (
						<select value={selectedTopic ?? ''} onChange={handleTopicChange}>
							<option value="">주제를 선택해주세요</option>
							{ActivityDropDownData.find(area => area.area === selectedArea)
								?.programs.find(program => program.program === selectedProgram)
								?.types.find(type => type.type === selectedType)
								?.points.map((point, index) => (
									<option key={index} value={point.topic}>{point.topic}</option>
							))}
						</select>
					)}
				</Selection>
      </Wrapper>
    </Container>
  );
};

export default ActivityDropDown;
