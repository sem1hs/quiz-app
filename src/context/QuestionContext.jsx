import { createContext, useContext, useEffect, useReducer } from "react";
const QuestionContext = createContext();
const useQuestion = () => useContext(QuestionContext);

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "page":
      return { ...state, page: payload };
    case "data":
      return { ...state, questions: payload };
    case "nextQuestion":
      return { ...state, index: state.index + 1 };
    case "prevQuestion":
      return { ...state, index: state.index - 1 };
    case "setOption": {
      const newArr = state.questions.filter((el) => el.id !== payload.id);
      return {
        ...state,
        questions: [...newArr, payload].sort((a, b) => a.id - b.id),
      };
    }
    case "finish": {
      const newArr = [...state.questions];
      const value = 100 / newArr.length;
      let point = 0;
      newArr.forEach((el) => {
        if (el.yourOption === el.correctOption) point += value;
      });
      return { ...state, page: "finish", point };
    }
    case "restart": {
      const newArr = state.questions;
      newArr.map((el) => (el.yourOption = null));
      return { ...initialState, questions: newArr };
    }
    case "sec": {
      if (state.seconds === 0) {
        const newArr = [...state.questions];
        const value = 100 / newArr.length;
        let point = 0;
        newArr.forEach((el) => {
          if (el.yourOption === el.correctOption) point += value;
        });
        return { ...state, page: "finish", point };
      }
      return { ...state, seconds: state.seconds - 1 };
    }
    default:
      break;
  }
}

const initialState = {
  page: "main",
  questions: [],
  index: 0,
  point: 0,
  seconds: 600,
};
const QuestionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
        if (!data) throw new Error("There is no data");
        dispatch({ type: "data", payload: data });
      } catch (error) {
        dispatch({ type: "page", payload: "error" });
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionProvider, useQuestion };
