import { afterAll, beforeAll, beforeEach, describe, expect, test } from "vitest";
import TodoList from "./TodoList";
import { render,screen,waitFor } from "@testing-library/react";
import { Todo } from "../../core/Todo";
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'


const todos:Todo[] =[
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

const server = setupServer(
    http.get(import.meta.env.VITE_TODOS_URL,()=>{
        return HttpResponse.json(todos)
    })
)



describe("Testing Mock TodoList",()=>{


    beforeAll(()=>{
        server.listen()
    })

    afterAll(()=>{
        server.close()
    })

    test("Render 3 TodoRows in TodoList",async ()=>{
        const r = render(<TodoList/>)
        await waitFor(()=>{

            const rows = r.container.querySelectorAll('tbody>tr')
            expect(rows.length).toBe(3)
        })
    })



})