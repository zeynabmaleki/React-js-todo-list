import React from 'react'
import '../css/TodoCard.css';

export default function TodoCard(props) {
    const {children} = props
    return (
        <li className='todo-item' >
            {children}
            <div className='action-container'>
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-x"></i>
            </div>
        </li>
    )
}
