import './App.css';
import Header from './component/Header';
import DatingCards from './component/DatingCards';
import SwipeButtons from './component/SwipeButtons';
function App() {
  return (
    <div className="app">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
