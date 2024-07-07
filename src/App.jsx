import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Error from "./components/Error";

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
    default:
      break;
  }
}

const initialState = {
  page: "main",
  questions: [],
  index: 0,
};
function App() {
  const [{ page, questions, index, yourOption }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
    <div className="h-screen w-full bg-slate-800 pt-24">
      {page === "error" && <Error dispatch={dispatch}></Error>}
      {page === "main" && <Header dispatch={dispatch}></Header>}
      {page === "question" && (
        <Questions
          questions={questions}
          dispatch={dispatch}
          index={index}
        ></Questions>
      )}
    </div>
  );
}

export default App;
