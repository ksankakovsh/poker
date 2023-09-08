import { useEffect, useState } from 'react';
import './App.scss';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import Spinner from './components/Spinner/Spinner';
import TournamentItem from './components/TournamentItem/TournamentItem';
import Progress from './components/Progress/Progress';

function App() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  return (
    <div className="App">
      <div className="wrap">
        <h1>Poker</h1>
        <Spinner />

        <PlayerInfo />
        <Progress  bgcolor={"#00D749"} completed={completed} />
        <TournamentItem />
      </div>
    </div>
  );
}

export default App;
