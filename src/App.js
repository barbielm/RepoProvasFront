import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles/reset.css"
import Homepage from "./components/homepage/Homepage"
import ProfessorTests from './components/getTests/ProfessorTests';
import DisciplinesTests from "./components/getTests/DisciplinesTests"
import PostTest from './components/postTest/PostTest';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Homepage} exact/>
        <Route path='/post-test' component={PostTest} exact/>
        <Route path='/tests-by-professor/:professorName' component={ProfessorTests} exact />
        <Route path='/tests-by-discipline/:disciplineId' component={DisciplinesTests} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
