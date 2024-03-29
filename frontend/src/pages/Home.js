import { useEffect} from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
const Home = ()=>{
    const {workouts, dispatch} = useWorkoutsContext()
     useEffect(()=>{
            const fetchWorkouts = async()=>{
             const response = await fetch( '/api/workouts')
             const json = await response.json()

             if(response.ok){
                dispatch({type:'SET_WORKOUTS', payload: json })
             }
            }
            fetchWorkouts()
    },[])
    return (
        <div className="Home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}
export default Home