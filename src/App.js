import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0]);

  const getNewAnecdote = () => {
    setSelected(() => Math.floor(Math.random() * anecdotes.length));
  };
  const getVote = () =>{
    const copy = [...votes]
    copy[selected]++;
    setVotes(copy)
  }

  function getIndex(){

    let max = 0;
    let element = 0;
    for(let i = 0; i<votes.length; i++)
    {
      if( votes[i] > element)
      {
        max= i;
        element = votes[i];
      }
    }
    console.log(max) 
    return max;
  }
  

  return (
    <div>
      {anecdotes[selected]}
      {votes[selected]}
      <button onClick={getVote}>Vote</button>
      <button onClick={getNewAnecdote}>Next anecdotes</button>
      <h1>Anecdotes With the most votes</h1>
      {anecdotes[getIndex()]}
    </div>
  );
}

export default App;
