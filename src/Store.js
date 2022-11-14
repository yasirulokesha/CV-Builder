import { createContext, useContext, useState } from "react";

export const Data = createContext();

export function DataWrapContext({children}) {
    const [data, setData] = useState({
        name: "",
        fullName: "",
        dob: "",
        nic: ""
    });

    return(
        <Data.Provider value={{data, setData}} >
            {children}
        </Data.Provider>
    )
}

export const UseData = () => useContext(Data)
