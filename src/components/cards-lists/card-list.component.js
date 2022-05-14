import React from 'react'
import './card-list.css'
import {Card} from './card.component'

export const CardList = (props)=>{
    return(
        <div className='card-list'>
           {props.monsters.map(e=>(
                <Card key={e.id} monster={e}/>   
           ))}
        </div>
    )
}