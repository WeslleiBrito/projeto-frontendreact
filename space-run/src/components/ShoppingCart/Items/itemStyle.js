import React from 'react'
import styled from "styled-components";
import trashIcon from "../../../assets/icons/trash.svg"
import reduce from "../../../assets/icons/reduce.svg"
import add from "../../../assets/icons/add.svg"



export const Text = styled.p`
  
    font-family: sans-serif;
    font-weight: 900;
    font-size: 0.9em;
    grid-column: 2/3;
    grid-row: 1/2;
    
`
export const Item = styled.li`
    display: grid;
    grid-template-columns: 12vh 1fr;
    grid-template-rows: 1fr 1fr;
    height: 15vh;
    border-radius: 1em;
    margin-bottom: 2vh;
    align-items: center;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 0.5vh 0;
    width: 23vw;
    justify-content: start;
    &:hover{
        transform: scale(1.02)
    }
`

export const Description = styled.section`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    align-items: center;
    margin-top: 1vh;
    justify-content: space-between;
    margin-left: 1vw;
    margin-right: 1vw;

`

export const Quantity = styled.input`
    text-align: center;
    width: 3vw;
    border-radius: 0.3em;
    border: none;
    height: 4vh;
    outline: none;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

export const Amount = styled.h5`
    font-size: 0.9em;
    font-weight: 900;
    display: flex;
    align-self: end;
`

export const ButtonRemove = (props) => {

    const buttonStyle = {
        background: "transparent",
        backgroundImage: `url(${trashIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "4vh",
        width: "4vh",
        border: "none",
        borderRadius: "5px",
        marginLeft: '0.3vw'
    };

    return (
        <button style={buttonStyle} id={props.id} onClick={props.removeProductCart} />
    )
}

export const ButtonReduce = (props) => {

    const buttonStyle = {

        background: "transparent",
        backgroundImage: `url(${reduce})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "2.6vh",
        width: "2.6vh",
        border: "none",
        borderRadius: "5px",
    }

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.handleInputQuantity(event, -1)}></button>
    )
}

export const ButtonAdd = (props) => {

    const buttonStyle = {

        background: "transparent",
        backgroundImage: `url(${add})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        height: "2.6vh",
        width: "2.6vh",
        border: "none",
        borderRadius: "5px",

        cursor: "pointer"
    }

    return (
        <button style={buttonStyle} id={props.id} onClick={(event) => props.handleInputQuantity(event, 1)}></button>
    )
}

export const QuantitySection = styled.section`
    display: flex;
    gap: 0.5vw;
    align-items: center;
`

export const Photograph = (props) => {

    const stylePhotograph = {
        width: '100%',
        height: '100%',
        gridColumn: '1/2',
        gridRow: '1/3',
        padding: '2vh 1vh 2vh 1vh',
    }

    return <img src={props.src} alt="foto do produto" style={stylePhotograph} />
}