// App.tsx - Main Teen Patti Saksham Game File import React, { useState, useEffect } from 'react'; import './App.css'; import { v4 as uuidv4 } from 'uuid';

const suits = ['♠', '♣', '♦', '♥']; const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function generateShuffledDeck() { const deck = []; suits.forEach((suit) => { values.forEach((value) => { deck.push({ value, suit }); }); }); for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; } return deck; }

function App() { const [players, setPlayers] = useState([]); const [deck, setDeck] = useState([]); const [playerName, setPlayerName] = useState(''); const [joined, setJoined] = useState(false);

const addPlayer = () => { const id = uuidv4(); const cards = generateShuffledDeck().slice(0, 3); const player = { id, name: playerName || Player-${id.slice(0, 4)}, coins: 1000, cards, }; setPlayers((prev) => [...prev, player]); setJoined(true); };

return ( <div className="App"> <h1>Teen Patti Saksham</h1> {!joined ? ( <div> <input type="text" placeholder="Enter your name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} /> <button onClick={addPlayer}>Join Game</button> </div> ) : ( <div> <h2>Players</h2> {players.map((p) => ( <div key={p.id}> <strong>{p.name}</strong> - Coins: {p.coins} - Cards: {p.cards.map(c => ${c.value}${c.suit}).join(', ')} </div> ))} </div> )} </div> ); }

export default App;
