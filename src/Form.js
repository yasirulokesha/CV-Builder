import React, { useContext } from 'react'
import { FullName } from './Fields'
import { Data, DataWrapContext, UseData } from './API'

export default function Form() {
    const {data} = UseData()

    return (
        <div className='form_'>
            <FullName />
            {data.name}
        </div>
    )
}