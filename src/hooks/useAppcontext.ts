import { useContext } from "react"
import { AppContext } from "../data/AppContext"

export const useAppcontext = () => {
    const { state, dispatch} = useContext(AppContext)

    return {
        state,
        dispatch
    }
}