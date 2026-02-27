export default function Home(){

    const baseUrl = `http://www.omdbapi.com/?apikey=`
   

    const getMovies = async()=>{
        try {
            const response = await fetch(baseUrl)
            const data = response.json()
            console.log(data)

        } catch (error) {
            console.error(error);
        }
    } 

    return 
    (
        <main>
        <h1>Forside</h1>
        <button onClick={getMovies}>Hent filmer</button>
    </main>
    )
    

}