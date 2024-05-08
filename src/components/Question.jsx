import he from "he";

export default function Question({ question }) {
  //!Was told to use Fisher-Yates shuffle algorithm. LOL. Time to learn a new algorithm.
  //https://www.youtube.com/watch?v=tLxBwSL3lPQ
  //[x] Combine incorrect_answers and correct_answer into one array
  /*To use Fisher-Yates we have to:
    -Bypass index 0, we don't use this
    -Loop from the end of the array to the front, on each loop:
    -Create a random number from 0 to # of elements. If random # is same as curr index, do nothing else:
    -Grab the element at index (of the random # ) and replace it with current element
  */

  //Create the fisher-yates shuffle function using Array.protype
  Array.prototype.shuffle = function() {
    let i = this.length, j, temp;
    while(--i > 0){
      j = Math.floor(Math.random() * (i+1));
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
    }
    return this;
  }

  const choices = [...question.incorrect_answers, question.correct_answer]
  const randomShuffle = choices.shuffle();
  console.log(randomShuffle)
  return (
    <div className="mx-auto flex w-[50%] flex-col mb-8">
      <h1>{he.decode(question.question)}</h1>
        {choices.map((choice, i) => {
          return (
            <p key={i}>
              {`${i+1}: ${he.decode(choice)}`}
            </p>
          )
        })}
    </div>
  );
}
