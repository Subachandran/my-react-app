import React from "react";
import Header from "./Header";
import Note from './Note'
import Footer from './Footer'
import allNotesFile from '../allNotes'
import CreateArea from './CreateArea'
import { useState } from "react";



function App() {

  const [allNotes, setNotes] = useState(allNotesFile)
  function deleteItem(index) {
    setNotes(allNotes.filter((val, ind) => ind !== index))
  }

  function addItem(newItem) {
    console.log(newItem)
    setNotes([...allNotes, newItem])
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      <div className="noteContainer">
        {allNotes.map((noteInfo, index) => (
          <Note
            key={index}
            ind={index}
            title={noteInfo.title}
            content={noteInfo.content}
            deleteItem={deleteItem} />
        )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

