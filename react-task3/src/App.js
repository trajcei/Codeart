import './App.css';
import Todos from './Todos';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Todo from './Todo';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/todo/:id" element={<Todo />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
