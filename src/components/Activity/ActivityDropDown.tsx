/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import ActivityDropDownData from '../../stores/data/ActivityDropDown.data';
import styled from 'styled-components';

interface SelectedData {
	program : string | null;
	type : string | null;
	topic : string | null;
	point : number | null;

}

interface ActivityDropDownProps {
	selectedArea?: string;
	onDropDownChange : (selectedData : SelectedData) => void;
	dropDownData : SelectedData;
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

const ActivityDropDown: React.FC<ActivityDropDownProps> = ({selectedArea, onDropDownChange, dropDownData}) => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const handleProgramChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProgramValue = event.target.value;
    setSelectedProgram(selectedProgramValue);
    setSelectedType(null);
    setSelectedTopic(null);
    setSelectedPoint(null);

    onDropDownChange({
        program: selectedProgramValue,
        type: null,
        topic: null,
        point: null,
    });
	};

	const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedTypeValue = event.target.value;
		setSelectedType(selectedTypeValue);
		setSelectedTopic(null);
		setSelectedPoint(null); 

		const foundType = ActivityDropDownData.find(area => area.area === selectedArea)
		?.programs.find(program => program.program === selectedProgram)
		?.types.find(type => type.type === selectedTypeValue);

		if (foundType && foundType.points && foundType.points.length === 1) {
			setSelectedPoint(foundType.points[0].point);
		}

		onDropDownChange({
			program: selectedProgram,
			type: selectedTypeValue,
			topic: null,
			point: foundType && foundType.points.length === 1 ? foundType.points[0].point : null
		});
	};

	const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedTopicValue = event.target.value;
		setSelectedTopic(selectedTopicValue);

		const foundPoint = ActivityDropDownData.find(area => area.area === selectedArea)
		?.programs.find(program => program.program === selectedProgram)
		?.types.find(type => type.type === selectedType)
		?.points.find(point => point.topic === selectedTopicValue);

		setSelectedPoint(foundPoint ? foundPoint.point : null);
		onDropDownChange({
			program: selectedProgram,
			type: selectedType,
			topic: selectedTopicValue,
			point: foundPoint ? foundPoint.point : null,
		});
	};


	// useEffect(()=>{
	// 	console.log(selectedProgram, selectedType,`토픽 : ${selectedTopic} ${typeof selectedTopic}`, selectedPoint);
	// }, [selectedProgram, selectedType, selectedTopic, selectedPoint])

	useEffect(()=>{
		
		setSelectedProgram(dropDownData.program);
		setSelectedType(dropDownData.type);
		setSelectedTopic(dropDownData.topic);
		setSelectedPoint(dropDownData.point);
	}, [dropDownData])

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
      
				<Selection>
					{selectedType && (
						ActivityDropDownData.find(area => area.area === selectedArea)
							?.programs.find(program => program.program === selectedProgram)
							?.types.find(type => type.type === selectedType)
							?.points.length === 1 &&
							ActivityDropDownData.find(area => area.area === selectedArea)
							?.programs.find(program => program.program === selectedProgram)
							?.types.find(type => type.type === selectedType)
							?.points[0].topic === '' 
							? null
							: <select value={selectedTopic ?? ''} onChange={handleTopicChange}>
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
