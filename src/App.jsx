import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Questions from "./components/Questions";

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
    default:
      break;
  }
}

const initialState = {
  page: "main",
  questions: [],
  index: 0,
  yourOption: 0,
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
        dispatch({ type: "data", payload: data });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="h-screen w-full bg-slate-800 pt-24">
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
