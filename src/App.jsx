import Header from "./components/Header";
import Questions from "./components/Questions";
import Error from "./components/Error";
import Finish from "./components/Finish";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-full bg-slate-800 pt-24">
      <Routes>
        <Route path="/error" element={<Error></Error>}></Route>
        <Route path="/" index element={<Header></Header>}></Route>
        <Route path="questions" element={<Questions></Questions>}></Route>
        <Route path="finish" element={<Finish></Finish>}></Route>
      </Routes>
    </div>
  );
}

export default App;
