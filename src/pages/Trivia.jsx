import Question from "../components/Question"

export default function Trivia({questionaire}) {
  // console.log(questionaire)
  /* [] Map through each index of our data array.
      -In our map return the question with correct_answer and incorrect_answers
      -Add functionality: Save value that user clicks on. useState to save the user's answer.
      -Compare user's answer with the correct answer for that question:
        -If both values match, then add styling to that user's value (background green). If answer's don't match, set correct answer green and their answer to red.
        -If both values match then add the percentage their current points, at the end when submitting it will display your score.
      [] Display choices randomly. API divides the answers so create a new array: key into incorrect answers and also add the correct answer to it. Then use Math.floor(Math.random()*3)+1)
  */
 //!Add a point system. Divide 100 by the length of the array(amount of questions)to get a percentage each question is worth. 
 //?How should I display the data? Make it so one question shows at a time? Or a list, similar to a test?
  return (
    <>
    <h1 className="mb-4 text-center text-3xl text-white">Trivia Start</h1>
    {questionaire.map((question, i) => {
      return (
        <Question question={question} key={i}/>
      )
    })}
    </>
  )
}