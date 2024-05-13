import WritingExercise from "./WritingExercise"

const FirstPage = () => {
  return (
    <article className="game-background">
      <div className="inputs-style input-margin row">
        <WritingExercise index = {0}/>
        <WritingExercise index = {1}/>
        <WritingExercise index = {2}/>
        <WritingExercise index = {3}/>
        <WritingExercise index = {4}/>
        <WritingExercise index = {5}/>
        <WritingExercise index = {6}/>
        <WritingExercise index = {7}/>
      </div>
    </article>
  )
}

  export default FirstPage