export default function History(history, handleChange){
    return(
        <select onChange={handleChange}>
            {history?.map((item, i) => <option key={i} value={item}>item</option>)}
        </select>
    )
}