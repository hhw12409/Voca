import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import NewWord from './components/NewWord';
import NewDay from './components/NewDay';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <DayList/> }/>
        <Route path="/day/:day" element={ <Day/> }/>
        <Route path="/new-word" element={ <NewWord/> }/>
        <Route path="/new-day" element={ <NewDay/> }/>
        <Route path="*" element={ <EmptyPage/> }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
