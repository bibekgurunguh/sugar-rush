import React from 'react';
import { UserFormProvider } from 'contexts/UserFormContext';
import { UserProvider } from 'contexts/UserContext';

const ContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <UserFormProvider>{children}</UserFormProvider>
    </UserProvider>
  );
};

export default ContextProvider;
