import React, { createContext, useState, useContext } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [pendingStudents, setPendingStudents] = useState([]);
  const [approvedStudents, setApprovedStudents] = useState([]);

  return (
    <StudentContext.Provider
      value={{
        pendingStudents,
        setPendingStudents,
        approvedStudents,
        setApprovedStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);

