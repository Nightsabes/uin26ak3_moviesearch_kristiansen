import { useEffect, useState } from "react"
import History from "../components/History"

export default function Home(){

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    const storedHistory = localStorage.getItem("search")
    const apikey = import.meta.env.VITE_APP_API_KEY
    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])
    const [focused, setFocused] = useState(false)

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(history))
    }, [history])

    const getMovies = async()=>{
        try {
            const response = await fetch(baseUrl)
            const data = response.json()
            console.log(data)

        } catch (error) {
            console.error(error);
        }
    } 
    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()

        setHistory((prev) => [...prev, search])

        
    }
    console.log(history)

    return 
    (
        <main>
        <h1>Forside</h1>
        <form onSubmit={handleSubmit}>
            <label>Search and shit</label>
            <input type="search" placeholder="Hairy Potter" onChange={handleChange} onFocus={()=> setFocused(true)} /*onBlur={()=> setFocused(false)}*//>
            <button onClick={getMovies}>Hent filmer</button>
        </form>
        {
            !focused ?
            <History history={history} handleChange={handleChange}/>:null }
    </main>
    )
    

}