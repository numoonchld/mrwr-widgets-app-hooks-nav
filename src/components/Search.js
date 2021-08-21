import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState(`book`);
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [term]);

  useEffect(() => {
    const searchAPICall = async () => {
      const apiEndpoint = `https://en.wikipedia.org/w/api.php`;
      const apiParams = {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm
        }
      };
      const { data } = await axios.get(apiEndpoint, apiParams);

      if (data.query) {
        setSearchResults(data.query.search);
      }
    };

    searchAPICall();
  }, [debouncedTerm]);

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label htmlFor="searchBar">Search</label>
          <input
            id="searchBar"
            className="input"
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </div>
      <div>
        {Array.isArray(searchResults) &&
          searchResults.map((result) => (
            <div key={result.pageid} className="ui celled list">
              <div className="item">
                <div className="content">
                  <div className="header">
                    <a
                      rel="noreferrer"
                      href={`https://en.wikipedia.org?curid=${result.pageid}`}
                      target="_blank"
                    >
                      {result.title}
                    </a>
                  </div>
                  {result.snippet.replace(/<([^>]+)>/gi, ``)}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Search;
