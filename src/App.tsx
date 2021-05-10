import Form from './domains/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Details from './Pages/Dashboard/Details';

function App() {
  return (
    <Router>
      <header >
        <nav className='bg-gray-900 pt-5 pl-40 h-20'>
          <ul className='flex text-blue-400 text-xl'>
            <li className=''>
              <Link className='p-3 font-black text-gray-100' to='/'>React TS</Link>
            </li>
            <li>
              <Link className='p-3 hover:text-blue-500 underline' to="/">Home</Link>
            </li>
            <li>
              <Link className='p-3 hover:text-blue-500 underline' to="/about">About</Link>
            </li>
            <li>
              <Link className='p-3 hover:text-blue-500 underline' to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className='p-3 hover:text-blue-500 underline' to="/form">Student Form</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-20 mb-16 sm:mx-auto sm:w-full max-w-3xl">
          <div className="bg-white py-8 px-6 shadow rounded shadow-xl">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route path="/dashboard/:username" component={Details}/>
              <Route path="/form" component={Form}/>
            </Switch>
          </div>
        </div>
      </header>
    </Router>
  );
}

export default App;
