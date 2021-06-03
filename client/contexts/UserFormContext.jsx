import React, { createContext, useState } from 'react';
import { initialUserFormState } from 'contexts/initialStates';

export const UserFormContext = createContext();

export const UserFormProvider = ({ children }) => {
  const [userForm, setUserForm] = useState(initialUserFormState);

  return (
    <UserFormContext.Provider value={[userForm, setUserForm]}>
      {children}
    </UserFormContext.Provider>
  );
};
