import React, { createContext, useState, useContext } from 'react';

const ParamsContext = createContext();

export const ParamsProvider = ({ children }) => {
  const [params, setParams] = useState({});

  const clearParams = () => {
    setParams({});
  };

  return (
    <ParamsContext.Provider value={{ params, setParams, clearParams }}>
      {children}
    </ParamsContext.Provider>
  );
};

export const useParams = () => {
  return useContext(ParamsContext);
};
