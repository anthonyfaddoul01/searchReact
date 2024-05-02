import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

const articles = [
  { id: 1, text: "Why Does My Dog Eat Grass? - It’s the exact search term I typed into Google. When I saw this pop up in my results, I clicked it. The headline was exactly what I was looking for, word-for-word." },
  { id: 2, text: "Egg Test: Boiled or Raw? - This headline is still a question, but it has a fun prefix to make it more interesting. It doesn’t follow the keyword-exact heading like the one above, but it still works because it’s simple." },
  { id: 3, text: "Will Disney Make Frozen 3? - This headline is intriguing and focuses around a popular topic. It also includes two phrases that people will look for when searching for the answer — “Disney” and “Frozen 3”." },
  { id: 4, text: "Are Marketing Degrees a Waste of Money? - Instead of going with something flat, like “Should I Get a Marketing Degree?”, there’s a negative spin on the headline that relates to something nobody wants to do, like waste money." },
  { id: 5, text: "Is Homework a Waste of Students’ Time? - Here’s another question-based headline with a slightly negative connotation. Nobody likes wasting time, but what’s great about this is that it’s balanced on an argument. Students who find that post will share it with their friends because nobody likes homework, right?" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const highlightText = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {articles.map(article => (
          <p key={article.id} dangerouslySetInnerHTML={{ __html: highlightText(article.text) }} />
        ))}
      </div>
    </div>
  );
}

export default App;
