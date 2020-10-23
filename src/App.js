import { useState } from 'react';
import Header from './components/Header';
import Selector from './components/Selector';
import { useCountRenders } from './hooks/useCountRenders';
import './styles.css';
import EffectTab from './tabs/EffectTab';
import EffectWithRefTab from './tabs/EffectWithRefTab';
import StateTab from './tabs/StateTab';

function App() {
  const [tab, setTab] = useState(2);
  useCountRenders('App');
  return (
    <div className="App">
      <Header />
      <Selector tab={tab} setTab={setTab} />
      {tab === 0 ? (
        <StateTab />
      ) : tab === 1 ? (
        <EffectTab />
      ) : tab === 2 ? (
        <EffectWithRefTab />
      ) : null}
    </div>
  );
}

export default App;
