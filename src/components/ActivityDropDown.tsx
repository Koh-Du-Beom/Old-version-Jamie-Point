/*eslint-disable*/
import React, { useState } from 'react';
import ActivityDropDownData from '../stores/ActivityDropDown.data';
import styled from 'styled-components';

interface Point {
  topic: string;
  point: number;
}

const Container = styled.div`
  display: flex;
`

const ActivityDropDown: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(event.target.value);
    setSelectedProgram(null);
    setSelectedType(null);
    setSelectedTopic(null);
    setSelectedPoint(null);
  };

  const handleProgramChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProgram(event.target.value);
    setSelectedType(null);
    setSelectedTopic(null);
    setSelectedPoint(null);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTypeValue = event.target.value;
    setSelectedType(selectedTypeValue);
    setSelectedTopic(null);
    setSelectedPoint(null);

    // Automatically select the first topic and point if available
    const foundType = ActivityDropDownData.find(area => area.area === selectedArea)
      ?.programs.find(program => program.program === selectedProgram)
      ?.types.find(type => type.type === selectedTypeValue);
    if (foundType && foundType.points && foundType.points.length > 0) {
      setSelectedTopic(foundType.points[0].topic);
      setSelectedPoint(foundType.points[0].point);
    }
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
  };

  return (
    <Container>
      <select value={selectedArea ?? ''} onChange={handleAreaChange}>
        <option value="">영역을 선택해주세요</option>
        {ActivityDropDownData.map((areaData, index) => (
          <option key={index} value={areaData.area}>{areaData.area}</option>
        ))}
      </select>

      {selectedArea && (
        <select value={selectedProgram ?? ''} onChange={handleProgramChange}>
          <option value="">프로그램을 선택해주세요</option>
          {ActivityDropDownData.find(area => area.area === selectedArea)?.programs.map((program, index) => (
            <option key={index} value={program.program}>{program.program}</option>
          ))}
        </select>
      )}

      {selectedProgram && (
        <select value={selectedType ?? ''} onChange={handleTypeChange}>
          <option value="">프로그램 종류를 선택해주세요</option>
          {ActivityDropDownData.find(area => area.area === selectedArea)
            ?.programs.find(program => program.program === selectedProgram)
            ?.types.map((type, index) => (
              <option key={index} value={type.type}>{type.type}</option>
          ))}
        </select>
      )}

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

      {/* Optionally display the selected point */}
      {selectedPoint !== null && <p>선택한 점수: {selectedPoint}</p>}
    </Container>
  );
};

export default ActivityDropDown;
