import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../src/components/Header'
import Form from '../src/components/Form'
import AllAuthors from './components/AllAuthors'
import EditForm from './components/EditForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<AllAuthors/>}/>
          <Route path="/new" element={<Form/>}/>
          <Route path="/edit/:id" element={<EditForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
