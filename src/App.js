import React, { useState } from "react";
import axios from "axios";
import Search from "./component/header/Search";
import { debounce } from 'lodash';
import Display from "./component/dictionary/Display";
export const Context = React.createContext();



function App() {
  const [meaning, setMeaning] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [search, setSearch] = useState('');
  const [word, setWord] = useState([]);

  const getWord = debounce((text) => {
    setSearch(text);
  }, 1000)

  const dictionaryWord = async (e) => {
    e.preventDefault();

    try {
      const {
        data: [{ word, meanings, phonetics }],
      } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`
      );
      setMeaning(meanings);
      setPhonetics(phonetics);
      setWord(word)

    } catch (error) {
      console.log(error);
    }
  };

  console.log(meaning)

  return (
    <>
      <Search getWord={(e) => getWord(e.target.value)} dictionaryWord={dictionaryWord} />
      <Context.Provider value={{ word: word, meaning: meaning, phonetics: phonetics }}>
        <Display />
      </Context.Provider>

    </>
  );
}

export default App;
