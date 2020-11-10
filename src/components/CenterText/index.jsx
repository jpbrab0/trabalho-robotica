import React from 'react'
import './styles.css'
export default function CenterText(props){
    return(
        <main>
            <div className="center-text">
                    {props.children}
            </div>
        </main>
    )
}