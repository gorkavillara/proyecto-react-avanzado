import { AppContext } from "@/contexts/AppContextProvider"
import { Task } from "@/models"
import { useContext } from "react"

export const useTasks = () => {
    const { tasks, setTasks } = useContext(AppContext)

    const addNewTask = (newTask: Task) => {
        setTasks([...tasks, newTask])
    }

    return { tasks, setTasks, addNewTask }
}
