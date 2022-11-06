import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <Container>
            <a href="#">Tesla © 2022 </a>
            <a href="#">Privacy & Legal</a>
            <a href="#"> Vehicle Recalls</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display:flex;
    min-height: 70px;
    align-items: center;
    justify-content: center;
    a{
    color: grey;
    padding: 0 6px

}
`