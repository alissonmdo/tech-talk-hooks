function Selector({ tab, setTab }) {
  return (
    <div className="Selector">
      <button onClick={() => setTab(0)}>
        useState {tab === 0 ? `🟢` : `🔴`}
      </button>
      <button onClick={() => setTab(1)}>
        useEffect {tab === 1 ? `🟢` : `🔴`}
      </button>
      <button onClick={() => setTab(2)}>
        useEffect & useRef {tab === 2 ? `🟢` : `🔴`}
      </button>
    </div>
  );
}
export default Selector;
