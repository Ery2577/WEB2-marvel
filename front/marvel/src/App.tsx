import { useState } from 'react';
import './App.css';

interface Character {
  id: number;
  name: string;
  realName: string;
  universe: string;
  upgradeCount: number;
  story?: string;
  image?: string; 
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([
    {
      id: 1,
      name: "Spider-Man",
      realName: "Peter Parker",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/Spider-man.jpg"
    },
    {
      id: 2,
      name: "Iron Man",
      realName: "Tony Stark",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/iron-man.jpg"
    },
    {
      id: 3,
      name: "Captain America",
      realName: "Steve Rogers",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/Capitain -america.jpg"
    },
    {
      id: 4,
      name: "Black Widow",
      realName: "Natasha Romanoff",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/Black-widow.jpg"
    },
    {
      id: 5,
      name: "Black Panther",
      realName: "T'Challa",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/Black-panther.jpg"
    },
    {
      id: 6,
      name: "Doctor Strange",
      realName: "Stephen Strange",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/Doctor-stange.jpg"
    },
    {
      id: 7,
      name: "Scarlet Witch",
      realName: "Wanda Maximoff",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/Scarlet-Witch.jpg"
    },
    {
      id: 8,
      name: "Hulk",
      realName: "Bruce Banner",
      universe: "Earth-616",
      upgradeCount: 0,
      image: "/src/assets/marvels/Hulk.jpg"
    }
  ]);

  const [newName, setNewName] = useState("");
  const [newRealName, setNewRealName] = useState("");
  const [newUniverse, setNewUniverse] = useState("");

  const deleteCharacter = (id: number) => {
    setCharacters(characters.filter(char => char.id !== id));
  };

  const upgradeCharacter = (id: number) => {
    const updated = characters.map(char => {
      if (char.id === id && char.upgradeCount < 3) {
        return {
          ...char,
          name: char.name + "✅",
          upgradeCount: char.upgradeCount + 1
        };
      }
      return char;
    });
    setCharacters(updated);
  };

  const addCharacter = () => {
    if (!newName.trim() || !newRealName.trim() || !newUniverse.trim()) return;
    const newChar: Character = {
      id: characters.length + 1,
      name: newName,
      realName: newRealName,
      universe: newUniverse,
      upgradeCount: 0,
    };
    setCharacters([...characters, newChar]);
    setNewName("");
    setNewRealName("");
    setNewUniverse("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Marvel & Company</h1>

      {/* Formulaire d'ajout */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        <input
          type="text"
          placeholder="Nom"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Nom réel"
          value={newRealName}
          onChange={(e) => setNewRealName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Univers"
          value={newUniverse}
          onChange={(e) => setNewUniverse(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={addCharacter}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ajouter
        </button>
      </div>

      {/*fORMULAIRE DE CARTE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map(char => (

          <div key={char.id} className="group [perspective:1000px]">

            <div className="relative w-full h-96 transition-transform duration-500 ">

              <div className="absolute inset-0 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-4 ">

                <img src={char.image} alt={char.name} className="w-32 h-32 object-cover rounded-full border-4 border-gray-200" />
                <h2 className="text-lg font-bold text-center">{char.name}</h2>
                <p className="text-sm text-gray-500">{char.realName}</p>
                <p className="text-xs text-gray-400">{char.universe}</p>


                {/* LES BOUTTONS*/}
                <div className="flex gap-2">

                  <button
                    onClick={() => deleteCharacter(char.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => upgradeCharacter(char.id)}
                    disabled={char.upgradeCount >= 3}
                    className={`px-3 py-1 rounded ${char.upgradeCount >= 3
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                  >
                    Upgrade
                  </button>

                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
