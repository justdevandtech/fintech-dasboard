import './App.css';
import { MainContainer } from './components/mainContainer/MainContainer';
import { SideMenu } from './components/sideMenu/SideMenu';

function App() {
  return (
    <main className="App">
      <SideMenu />
      <MainContainer />

    </main>
  );
}

export default App;
