import React from "react"

type HeaderTypeProps = {
    title: string
}

export const Header = (props: HeaderTypeProps) => {

    return(
        <header>
            {props.title} 
        </header>
    )
}