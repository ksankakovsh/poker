import { useEffect, useState } from 'react';
import './App.scss';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import Spinner from './components/Spinner/Spinner';
import TournamentItem from './components/TournamentItem/TournamentItem';
import Progress from './components/Progress/Progress';


function App() {
  const [completed, setCompleted] = useState(0);
  const data = [
    {   
        id: 1,
        type: "NL 2-7 Triple Draw",
        registr: "Registering",
        name: "OFC Pineapple",
        date: "12:00 pm, 28 July",
        rate: "1000/1000",
        score: "1000000",
        fix: true,
        time: false,
        exit: false,
        rapid: false
    },
    {   
        id: 2,   
        type:"NL Holdem",
        registr: "Registering",
        name: "OFC Pineapple",
        date: "12:00 pm, 28 July",
        rate: "1/6",
        score: "100",
        fix: true,
        time: false,
        exit: false,
        rapid: false
    },
    {   
        id: 3,   
        type: "NL OFC/pineapple prg",
        registr: "Canceled",
        name: "Hourly Freeroll",
        date: "12:00 pm, 28 July",
        rate: "1/10 000",
        score: "1000",
        fix: false,
        time: true,
        exit: true,
        rapid: false
    },
    {   
        id: 4,   
        type: "PL Omaha h/l",
        registr: "Canceled",
        name: "Rapid Tournament",
        date: "12:00 pm, 28 July",
        rate: "0/0",
        score: "1000000",
        fix: false,
        time: false,
        exit: false,
        rapid: false
    },
    {   
        id: 5,   
        type: "NL 6 cards omaha h/l",
        registr: "Canceled",
        name: "PL Omaha Knockout",
        date: "12:00 pm, 28 July",
        rate: "0/100",
        score: "146",
        fix: false,
        time: false,
        exit: false,
        rapid: true
    },
    {   
        id: 6,   
        type: "NL 2-7 Triple Draw",
        registr: "Registering",
        name: "OFC Pineapple",
        date: "12:00 pm, 28 July",
        rate: "1000/1000",
        score: "1000000",
        fix: false,
        time: false,
        exit: false,
        rapid: false
    }
]

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
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
