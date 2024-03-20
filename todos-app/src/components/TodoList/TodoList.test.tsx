import { beforeEach, describe, expect, test } from "vitest";
import TodoList from "./TodoList";
import { render,screen } from "@testing-library/react";
import { Todo } from "../../core/Todo";



describe("Testing TodoList",()=>{
    let todos:Todo[]

    beforeEach(()=>{
        todos=[
            {
                "userId": 1,
                "id": "14",
                "title": "repellendus sunt dolores architecto voluptatum",
                "completed": true
              },
              {
                "userId": 1,
                "id": "15",
                "title": "ab voluptatum amet voluptas",
                "completed": true
              },
              {
                "userId": 1,
                "id": "16",
                "title": "accusamus eos facilis sint et aut voluptatem",
                "completed": true
              }            
        ]
    })

    test("Render TodoList",()=>{
        render(<TodoList todos={todos} doDelete={()=>{}} isLoadingDelete={false} isLoadingFetch={false}/>)

    })

    test("Render 3 TodoRows in TodoList",()=>{
        const r = render(<TodoList todos={todos} doDelete={()=>{}} isLoadingDelete={false} isLoadingFetch={false}/>)
        const rows = r.container.querySelectorAll('tbody>tr')
        expect(rows.length).toBe(3)
    })



})