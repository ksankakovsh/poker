import { useEffect, useState } from 'react';
import './App.scss';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import Spinner from './components/Spinner/Spinner';
import TournamentItem from './components/TournamentItem/TournamentItem';
import Progress from './components/Progress/Progress';
import data from './data.json';


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
        {data.map((item) => (
          <TournamentItem
          key={item.id}
            type={item.type}
            registr={item.registr}
            name={item.name}
            date={item.date}
            rate={item.rate}
            score={item.score}
            fix={item.fix}
            time={item.time}
            exit={item.exit}
            rapid={item.rapid}
            btn={item.btn}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
