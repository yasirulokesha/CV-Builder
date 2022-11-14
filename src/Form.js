import React, { useContext } from 'react'
import { FullName } from './Fields'
import { Data, DataWrapContext, UseData } from './Store'

export default function Form() {
    const data_ = useContext(Data)
    return (
        <div>
            <DataWrapContext>
                <FullName />
            </DataWrapContext>
            {data_}
        </div>
    )
}