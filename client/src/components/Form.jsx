import axios from "axios";
import { OpenAIApiAxiosParamCreator } from "openai";
import React, { useState } from "react";

function Form() {
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [language, setLanguage] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectPlan = {
      category: category,
      level: level,
      language: language,
      number: number,
    };

    try {
      const response = await axios.post("http://localhost:3000/", projectPlan);
      const json = await response.data;

      console.log(json);
      setCategory("");
      setLevel("");
      setLanguage("");
      setNumber("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1> AI-Coach to Levrage your learning journey</h1>
      <label htmlFor="">Category:</label>
      <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        va
        lue={category}
      />
      <label htmlFor="">Current Level:</label>
      <input
        type="text"
        onChange={(e) => setLevel(e.target.value)}
        value={level}
      />

      <label htmlFor="">Learning Tools:</label>
      <input
        type="text"
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
      />

      <label htmlFor="">Phone number:</label>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />

      <button> Get your planning </button>
    </form>
  );
}

export default Form;
