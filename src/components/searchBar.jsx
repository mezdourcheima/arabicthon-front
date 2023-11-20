// SearchBar.jsx

import React, { useState } from 'react';
import { Search } from 'react-feather';
import axios from 'axios';

import '../styles/fonts.css';
import '../styles/searchbar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [definition, setDefinition] = useState('');

  const api = "fee6626b-fc57-443d-a838-60d0de172316";

  async function getSynonyms(ID) {
    const url = 'https://siwar.ksaa.gov.sa/api/alriyadh/find/entries/by/senses/ids';
    const data = { "ids": [ID] };

    try {
      const response = await axios.patch(url, data, { headers: { 'apikey': api } });
      const lemmaForms = response.data.map(item => item.lemma.formRepresentations[0].form);
      return lemmaForms;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function funRequest(response) {
    try {
      if (response.status === 200) {
        const data = response.data;
        return data;
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      return null;
    }
  }

  async function searchWord(word) {
    const url = `https://siwar.ksaa.gov.sa/api/alriyadh/search?query=${word}`;

    try {
      const response = await axios.get(url, {
        headers: {
          'accept': 'application/json',
          'apikey': api
        },
        withCredentials: true,
      });

      const data = funRequest(response);

      const definitions = [];

      for (const entry of data) {
        for (const sense of entry.senses || []) {
          const senseDefinition = (sense.definition.textRepresentations || [])[0]?.form || '';
          definitions.push(senseDefinition);

          const extractedData = [];
          for (const relation of sense.relations || []) {
            const relationType = relation.type || '';
            const relatedId = relation.related || '';
            const relatedWords = await getSynonyms(relatedId);
            extractedData.push({ RelationType: relationType, Words: relatedWords });
          }
          console.log(extractedData);
        }

        const extractedStems = [];
        for (const stem of entry.stems || []) {
          const stemType = stem.type || '';
          const stemForm = (stem.formRepresentations || [{}])[0]?.form || '';
          extractedStems.push({ StemType: stemType, StemForm: stemForm });
        }
        console.log(extractedStems);
      }

      const joinedDefinitions = definitions.join(', ');
      setDefinition(joinedDefinitions);

    } catch (error) {
      console.error(`Error making the request: ${error.message}`);
    }
  }

  const handleSearch = async () => {
    try {
      searchWord(searchQuery);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="...Search/بحث"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="search-icon" onClick={handleSearch} />
      
    </div>
  );
};

export default SearchBar;
