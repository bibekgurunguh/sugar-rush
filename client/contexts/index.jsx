import React from 'react';
import { UserFormProvider } from 'contexts/UserFormContext';

const ContextProvider = ({ children }) => {
  return <UserFormProvider>{children}</UserFormProvider>;
};

export default ContextProvider;
