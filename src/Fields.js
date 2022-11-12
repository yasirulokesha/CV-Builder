import { createContext, useContext } from "react";
import { Data, UseData } from "./Store";
// import { Data } from "./Store";
// import { DataWrap } from './Store';

export function FullName() {
    const [data, setData] = UseData()
    return (
        <form onSubmit={(event) => { event.preventDefault() }}>
            <label>Name</label>
            <input type="text" value={data.name}  placeholder="John Jonathan" name="name"></input>
        </form>
    )
}