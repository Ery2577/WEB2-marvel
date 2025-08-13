import { useState } from 'react';
import './App.css';

interface Character {
  id: number;
  name: string;
  realName: string;
  universe: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([
    { id: 1, name: "Spider-Man", realName: "Peter Parker", universe: "Earth-616" },
    { id: 2, name: "Iron Man", realName: "Tony Stark", universe: "Earth-616" },
    { id: 3, name: "Captain America", realName: "Steve Rogers", universe: "Earth-616" },
    { id: 4, name: "Black Widow", realName: "Natasha Romanoff", universe: "Earth-616" },
    { id: 5, name: "Black Panther", realName: "T'Challa", universe: "Earth-616" },
    { id: 6, name: "Doctor Strange", realName: "Stephen Strange", universe: "Earth-616" },
    { id: 7, name: "Scarlet Witch", realName: "Wanda Maximoff", universe: "Earth-616" },
    { id: 8, name: "Hulk", realName: "Bruce Banner", universe: "Earth-616" },
  ]);

  const [newName, setNewName] = useState('');
  const [newRealName, setNewRealName] = useState('');
  const [newUniverse, setNewUniverse] = useState('');

  const addCharacter = () => {
    if (!newName || !newRealName || !newUniverse) return;
    const newCharacter: Character = {
      id: characters.length + 1,
      name: newName,
      realName: newRealName,
      universe: newUniverse,
    };
    setCharacters([...characters, newCharacter]);
    setNewName('');
    setNewRealName('');
    setNewUniverse('');
  };

  const deleteCharacter = (id: number) => {
    setCharacters(characters.filter(char => char.id !== id));
  };

  const upgradeCharacter = (id: number) => {
    const updated = characters.map(char => {
      if (char.id === id) {
        return { ...char, name: char.name + "✅​" };
      }
      return char;
    });
    setCharacters(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Marvel & Company</h1>

      <div className="mb-6 flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Real Name"
          value={newRealName}
          onChange={(e) => setNewRealName(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Universe"
          value={newUniverse}
          onChange={(e) => setNewUniverse(e.target.value)}
          className="border rounded p-2"
        />
        <button
          onClick={addCharacter}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/*les buttons*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {characters.map(char => (
          <div key={char.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">{char.name}</h2>
            <p className="text-gray-700">Real Name: {char.realName}</p>
            <p className="text-gray-500">Universe: {char.universe}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => deleteCharacter(char.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => upgradeCharacter(char.id)}
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
