import React from 'react'
import { FullName, Name } from './Fields'
import { UseData } from './API'

export default function Form() {
    const {data} = UseData()

    return (
        <div className='form_'>
            <Name />
            <FullName/>
            Name : {data.name}
            <br/>
            Full Name : {data.fullName}
        </div>
    )
}