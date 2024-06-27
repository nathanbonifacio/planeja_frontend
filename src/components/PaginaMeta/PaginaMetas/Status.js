import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background-color: #E9F8F9;
    transition: all 0.2s linear;
    box-shadow: 5px 5px 30px 0 rgba(51, 51, 51, 20%);
    padding: .5rem;
    border-radius: 1rem;
    cursor: pointer;

`;


const Status = ({ iconClass, label, value, statusClass }) => {
  return (
    <Section className="status">
      <div className={`status__icon ${statusClass}`}>
        <i className={iconClass}></i>
      </div>
      <div className="info">
        <h2 className="info__label">{label}</h2>
        <span className={`info__total ${statusClass}`}>{value}</span>
      </div>
    </Section>
  );
};

export default Status;
