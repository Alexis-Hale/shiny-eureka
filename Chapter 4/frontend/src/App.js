import './App.css';
import Chat from './component/Chat';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
