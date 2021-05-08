import React from 'react'
import style from 'styles/Widget.module.css';


const Widget = props => {
    return (
        <div className={`${style.Widget} divide`}>
            <div className={style.title}>{props.title}</div>

            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}


export default Widget
