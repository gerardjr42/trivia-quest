import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Path based on user's form ex: https://opentdb.com/api.php?amount=20&category=9&difficulty=medium&type=boolean

export default function Form({setQuestionaire, questionaire}) {
  let navigate = useNavigate();

  const catURL = "https://opentdb.com/api_category.php";
  const baseURL = "https://opentdb.com/api.php";

  //useState for json data
  const [categories, setCategories] = useState([]);

  //useState for form values
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");

  //[x] Get value from amount
  //[x] Get value from category
  //[x] Get value from difficulty
  //[x] Get value from type
  //[x] TODO: Get value from questionaire correctly (this is our json)
  //!Conflicts will arise if set to all, example: if type is all, then the url path for that should not show. Do this in their setState.

  //useEffect to fetch categories api
  useEffect(() => {
    fetch(catURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetching API was not successful`);
        }
        return response.json();
      })
      .then((data) => setCategories(data.trivia_categories))
      .catch((error) => console.error(error));
  }, []);

  //! Change the logic of the url path below, make a function that outputs the url based if user selects options. If use sells any for any input then don't input that state variable. Ex: if Category is set to any then just skip, don't add.
  //?Ternary expression in a function?
  //useEffect for custom API Path based on user's input in form.
  useEffect(() => {
    if (!amount) return;
    // fetch(`${baseURL}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
    fetch(
      `${baseURL}?amount=${amount}${category !== "all" ? `&category=${category}` : ""}${difficulty !== "all" ? `&difficulty=${difficulty}` : ""}${type !== "all" ? `&type=${type}` : ""}`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fetching Questions was not successful`);
        }
        return response.json();
      })
      .then((data) => setQuestionaire(data.results))
      .catch((error) => console.error(error));
    // }, [questionaire]);
    }, [amount, category, difficulty, type]);


  function handleSubmit(e) {
    e.preventDefault();
    navigate("/trivia")
  }

  //[x]Check if values log correcty
  // console.log(amount)
  // console.log(category)
  // console.log(difficulty)

  return (
    <section>
      <h1 className="mb-4 text-center text-3xl text-white">
        Choose your Categories
      </h1>
      <form className="mx-auto flex w-[50%] flex-col" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Number of Questions:
          <input
            type="text"
            name="amount"
            id="amount"
            className="mb-2 block w-full rounded-md py-2 pl-3"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label htmlFor="category">
          Select Categories:
          <select
            name="category"
            id="category"
            className="mb-2 block w-full rounded-md py-2 pl-3"
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* Map categories here from categories api */}
            <option value="all" key="1">
              Any Category
            </option>
            {categories.map((cat) => {
              return (
                <option value={cat.id} key={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="difficulty">
          Select Difficulty:
          <select
            name="difficulty"
            id="difficulty"
            className="mb-2 block w-full rounded-md py-2 pl-3"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="all">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label htmlFor="type">
          Select Type:
          <select
            name="type"
            id="type"
            className="mb-2 block w-full rounded-md py-2 pl-3"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </label>
        <button className="rounded bg-[#1F2937] px-2 py-1 text-white">
          Start
        </button>
      </form>
    </section>
  );
}
