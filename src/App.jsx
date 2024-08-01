import Header from "./components/Header";
import Questions from "./components/Questions";
import Error from "./components/Error";
import Finish from "./components/Finish";
import { useQuestion } from "./context/QuestionContext";

function App() {
  const { state } = useQuestion();
  const { page } = state;

  return (
    <div className="h-screen w-full bg-slate-800 pt-24">
      {page === "error" && <Error></Error>}
      {page === "main" && <Header></Header>}
      {page === "question" && <Questions></Questions>}
      {page === "finish" && <Finish></Finish>}
    </div>
  );
}

export default App;
