import Inputs from "../helpers/Inputs"

let index = 0


const WritingExercise = () => {
  return (
    <section className="row">
      <div className="col-6">
      <Inputs index = {index}/>
      </div>
      <div className="col-6">
      <Inputs className="me-0" index = {index}/>
      </div>
    </section>
  )
}
export default WritingExercise