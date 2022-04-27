import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import TodoCard from "./TodoCard";
import { counter } from "./TodoCard";
import { minHeight } from "@mui/system";

function Todos() {
  const [todos, setTodos] = useState();
  const [completed, setCompleted] = useState("all");
  const [input, setInput] = useState(0);
  const [text, settext] = useState("");
  const [state, setstate] = useState(0)
  let todosLength;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  if (typeof todos !== 'undefined') {
    todosLength = todos.length;
  }


  function handleChange() {
    let check = document.getElementById("dropdown").value;

    if (check === "completed") {
      check = "true";
    } else if (check === "uncompleted") {
      check = "false";
    }
    setCompleted(check);
  }

  function inputChange() {
    let searchText = document.getElementById("input_text").value.toLowerCase();
    if (searchText.length != 0) {
      setInput(input + 1);
      settext(searchText);
    } else {
      setInput(0);
      settext(searchText);
    }
  }

  if (completed === "all" || input !== 0) {
    return (
      <>
        <h4>To Do </h4>
        <select id="dropdown" onChange={(e) => handleChange(e)}>
          <option value="all">all todos</option>
          <option value="completed">completed todos</option>
          <option value="uncompleted">uncompleted todos</option>
        </select>
        <h5>Search To Do</h5>
        <input id="input_text" type="text" onChange={(e) => inputChange(e)} />

        {todos ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {todos
              .filter((todo) => todo.title.startsWith(text))
              .map((todo) => (
                <TodoCard todo={todo} key={todo.id} data={state} todosLength={todosLength}/>
              ))}
          </div>
        ) : (
          <CircularProgress />
        )}
      </>
    );
  } else if (completed === "true") {
    return (
      <>
        <h4>To Do </h4>
        <select id="dropdown" onChange={(e) => handleChange(e)}>
          <option value="all">all todos</option>
          <option value="completed">completed todos</option>
          <option value="uncompleted">uncompleted todos</option>
        </select>

        {todos ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {todos
              .filter((todo) => todo.completed == true)
              .map((todo) => (
                <TodoCard todo={todo} key={todo.id} />
              ))}
          </div>
        ) : (
          <CircularProgress />
        )}
      </>
    );
  } else {
    return (
      <>
        <h4>To Do </h4>
        <select id="dropdown" onChange={(e) => handleChange(e)}>
          <option value="all">all todos</option>
          <option value="completed">completed todos</option>
          <option value="uncompleted">uncompleted todos</option>
        </select>

        {todos ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {todos
              .filter((todo) => todo.completed == false)
              .map((todo) => (
                <TodoCard todo={todo} key={todo.id} />
              ))}
          </div>
        ) : (
          <CircularProgress />
        )}
      </>
    );
  }
}

export default Todos;
