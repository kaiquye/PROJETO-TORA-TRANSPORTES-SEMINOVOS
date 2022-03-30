import './App.css';
import { Router } from '../src/route/index';
import Error from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <Error>
      <div className="App">
        <Router/>
      </div>
    </Error>

  );
}

export default App;
