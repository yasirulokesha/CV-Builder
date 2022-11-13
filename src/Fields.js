import { UseData } from "./Store";

export function FullName() {
    const data = UseData()
    return (
        <form onSubmit={(event) => { event.preventDefault() }}>
            <label>Name</label>
            <input type="text" value={data.name} placeholder="John Jonathan" name="name"></input>
            {console.log(data)}
        </form>
    )
}