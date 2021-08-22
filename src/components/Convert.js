import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState(``);
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const inputTextTimeout = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(inputTextTimeout);
    };
  }, [text]);

  useEffect(() => {
    const translationAPICall = async () => {
      const postParams = {
        params: {
          q: debouncedText,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      };

      const { data } = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        postParams
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    translationAPICall();
  }, [language, debouncedText]);

  return (
    <>
      <div>
        <h1 className="ui header">{translated}</h1>
      </div>
    </>
  );
};

export default Convert;
