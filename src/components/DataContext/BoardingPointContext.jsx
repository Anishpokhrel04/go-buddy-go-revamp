import  { createContext, useState, useContext } from "react";

const BoardingPointContext = createContext();
const UpdateBoardingPointContext = createContext();

export function useBoardingPoint() {
  return useContext(BoardingPointContext);
}

export function useUpdateBoardingPoint() {
  return useContext(UpdateBoardingPointContext);
}

export function BoardingPointProvider({ children }) {
  const [boardingPoint, setBoardingPoint] = useState("");

  return (
    <BoardingPointContext.Provider value={boardingPoint}>
      <UpdateBoardingPointContext.Provider value={setBoardingPoint}>
        {children}
      </UpdateBoardingPointContext.Provider>
    </BoardingPointContext.Provider>
  );
}
