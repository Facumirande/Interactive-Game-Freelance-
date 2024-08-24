import WritingExercise from "./WritingExercise"

const FirstPage = () => {
  return (
    <article className="game-background">
      <div className="inputs-style input-margin row">
        <h1 className="title">Escribe el nombre de cada componente:</h1>
        <WritingExercise index = {0}/>
        <WritingExercise index = {1}/>
        <WritingExercise index = {2}/>
        <WritingExercise index = {3}/>
        <WritingExercise index = {4}/>
        <WritingExercise index = {5}/>
        <WritingExercise index = {6}/>
        <WritingExercise index = {7}/>
        <h1 className="ayudaButton">Ayuda</h1>
      </div>
    </article>
  )
}

  export default FirstPage