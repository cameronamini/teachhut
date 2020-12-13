import React from 'react'
import styled from 'styled-components'

const ErrorHeader = styled.h1`
    text-align: center;
    margin: 100px auto;

`

export default function Error() {
    return(
        <>
            <ErrorHeader>Oops! Page Not Found</ErrorHeader>
        </>
    )

}