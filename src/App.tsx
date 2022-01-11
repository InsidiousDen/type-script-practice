import { BrowserRouter, Route, Link } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Списолк дел</Link>
        </nav>
        <Route path={"/users"} exact>
          <UsersPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage />
        </Route>
        <Route path={"/users/:id"}>
          <UserItemPage />
        </Route>
        <Route path={"/todos/:id"}>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
