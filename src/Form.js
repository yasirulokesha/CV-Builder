import React from 'react'
import { FullName } from './Fields'
import { DataWrapContext } from './Store'

export default function Form() {
    return (
        <div>
            <DataWrapContext>  
                <FullName />
            </DataWrapContext>
        </div>
    )
}