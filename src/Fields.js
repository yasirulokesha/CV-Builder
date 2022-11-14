import { UseData } from "./Store";

export function FullName() {
    const {data , setData} = UseData()
    return (
        <form onSubmit={(event) => { event.preventDefault() }}>
            <label>Name</label>
            <input type="text" value={data.name} onChange={(event) =>{setData({...data,name: event.target.value})} } placeholder="John Jonathan" name="name"></input>
        </form>
    )
}