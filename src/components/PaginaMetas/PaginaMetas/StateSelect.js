import React from 'react';



const StateSelect = () => {
  return (
    <div className="state-select">
      <div className="state-select-toggle">
        <span className="state-select-toggle__state-select">Meta01</span>
        <i className="fas fa-chevron-down state-select-toggle__icon"></i>
      </div>
      <div className="state-select-list">
        <input type="text" placeholder="Selecionar Meta..." className="state-select-list__search" />
        <ul>
          <li className="state-select-list__item" data-id="brasil=true">Meta01</li>
        </ul>
      </div>
    </div>
  );
};

export default StateSelect;
