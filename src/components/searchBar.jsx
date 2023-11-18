import React, { useState } from 'react';
import { Search } from 'react-feather';
import axios from 'axios';

import '../styles/fonts.css';
import '../styles/searchbar.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [definition, setDefinition] = useState('');

  const api = "fee6626b-fc57-443d-a838-60d0de172316";

  const headers = {
    'accept': 'application/json',
    'apikey': api
  };

  async function getSynonyms(ID) {
    const url = 'https://siwar.ksaa.gov.sa/api/alriyadh/find/entries/by/senses/ids';
    const data = { "ids": [ID] };

    try {
      const response = await axios.patch(url, data, { headers });
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
    const url = 'https://siwar.ksaa.gov.sa/api/alriyadh/search';
    const params = { 'query': word };

    try {
      const response = await axios.get(url, { headers, params });
      const data = funRequest(response);

      // Initialize an array to store definitions
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

      // Join the definitions into a single string
      const joinedDefinitions = definitions.join(', ');

      // Update the definition state
      setDefinition(joinedDefinitions);

    } catch (error) {
      console.error(`Error making the request: ${error.message}`);
    }
  }

  const handleSearch = async () => {
    try {
      const searchApiUrl = '/api/alriyadh/search';

      const response = await axios.get(searchApiUrl, {
        headers,
        params: {
          query: searchQuery
        }
      });

      const searchData = response.data;

      console.log('Search Data:', searchData);

      // Now, let's call the funRequest function
      const processedData = funRequest(response);

      console.log('Processed Data:', processedData);

      // Finally, call the searchWord function with the search query
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
