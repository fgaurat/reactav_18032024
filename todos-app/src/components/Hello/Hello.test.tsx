import { describe, expect, test } from "vitest";
import { render,screen } from "@testing-library/react";
import Hello from "./Hello";
import userEvent from "@testing-library/user-event"


describe('Test Hello',()=>{

    test("render Hello component",()=>{
        render(<Hello/>)
    })

    test("Snapshot render Hello component",()=>{
        const result = render(<Hello/>)
        expect(result).toMatchSnapshot()
    })


    test("HelloWorld string in Hello component",()=>{
        render(<Hello/>)
        const s = screen.getByText(/HelloWorld/)
        expect(s).toBeInTheDocument()

    })

    test("count:0 in Hello component",()=>{
        render(<Hello/>)
        // const s = screen.getByText(/count : 0/)
        const s = screen.getByText("count : 0")
        expect(s).toBeInTheDocument()

    })
    test("increment count in Hello component",async ()=>{
        
        //Arrange
        render(<Hello/>)
        
        //Act
        const button = screen.getByText(/inc/)
        await userEvent.click(button)
        
        // Assert
        await screen.findByText("count : 1")



    })


})