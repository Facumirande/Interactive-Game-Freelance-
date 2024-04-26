import WritingExercise from "./WritingExercise"
import { arrayImage } from "../helpers/inputsData"

const FirstPage = () => {
  for (let index = 0; index < arrayImage.length; index++) {
    return (
      <article className="row">
    <WritingExercise index = {0}/>
    <WritingExercise index = {1}/>
    <WritingExercise index = {2}/>
    </article>
  )
}
}
export default FirstPage