import { createContext, useContext, useState } from "react";

export const Data = createContext("knsdoc");

export function DataWrapContext({children}) {
    const [data, setData] = useState({
        name: "dadsad",
        fullName: "da",
        dob: "das",
        nic: "da"
    });

    return(
        <Data.Provider value={data}>
            {children}
        </Data.Provider>
    )
}

export const UseData = () => useContext(Data) 

