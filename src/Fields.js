import { UseData } from "./API";

export function Name() {
    const { data, setData } = UseData()
    return (
        <form onSubmit={(event) => { event.preventDefault() }}>
            <label>Name</label>
            <input type="text" value={data.name} onChange={(event) => { setData({ ...data, name: event.target.value }) }} placeholder="John Jonathan" name="name"></input>
            <button type="submit">Next</button>
        </form>
    )
}

export function FullName() {
    const { data, setData } = UseData()
    return (
        <form onSubmit={(event) => { event.preventDefault() }}>
            <label>Full Name</label>
            <input type="text" value={data.fullName} onChange={(event) => { setData({ ...data, fullName: event.target.value }) }} placeholder="John Jonathan" name="fullname"></input>
            <button type="submit">Next</button>
        </form>
    )
}