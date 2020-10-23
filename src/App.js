import { useState } from 'react';
import Header from './components/Header';
import Selector from './components/Selector';
import { useCountRenders } from './hooks/useCountRenders';
import './styles.css';
import StateTab from './tabs/StateTab';

function App() {
  const [tab, setTab] = useState(0);
  useCountRenders('App');
  return (
    <div className="App">
      <Header />
      <Selector tab={tab} setTab={setTab} />
      <StateTab />
    </div>
  );
}

export default App;
