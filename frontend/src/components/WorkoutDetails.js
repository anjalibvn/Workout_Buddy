import { useWorkoutsContext } from "../hooks/useWorkoutContext"

const WorkoutDetails =({workout})=>{

const {dispatch} = useWorkoutsContext()
    const handleClick =async()=>{
        const response = await fetch('/api/workouts/'+ workout._id,{
            method:'DELETE'
        })
    const json = await response.json()

    if (response.ok){
        dispatch({type: 'DELETE_WORKOUT'})
    }
    }
    return(
        <div className="workout-details">
<h4>{workout.title}</h4>
<p><strong>Load(kg):{workout.load}</strong></p>
<p><strong>REPS:{workout.reps}</strong></p>
<p>{workout.createdAt}</p>
<span onClick={handleClick} >DELETE</span>
        </div>
    )
}

export default WorkoutDetails