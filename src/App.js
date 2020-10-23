import { useState } from 'react';
import Header from './components/Header';
import Selector from './components/Selector';
import { useCountRenders } from './hooks/useCountRenders';
import './styles.css';
import EffectTab from './tabs/EffectTab';
import StateTab from './tabs/StateTab';

function App() {
  const [tab, setTab] = useState(0);
  useCountRenders('App');
  return (
    <div className="App">
      <Header />
      <Selector tab={tab} setTab={setTab} />
      {tab === 0 ? <StateTab /> : tab === 1 ? <EffectTab /> : null}
    </div>
  );
}

export default App;
