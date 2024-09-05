import { Trash2, Edit, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TodoList() {
    // Hardcoded initial todos
    const todos = [
        { id: 1, text: "Buy groceries" },
        { id: 2, text: "Finish project report" },
        { id: 3, text: "Call mom" },
        { id: 4, text: "Go for a run" },
        { id: 5, text: "Read a book" },
    ]

    return (
        <section className="my-container">
            <h1 className="title-2 mt-4 text-center mb-6">My Todo List</h1>
            <div className="mx-auto max-w-2xl bg-card text-card-foreground border rounded-lg">
                <div>
                    {/* Add Todo Form */}
                    <form className="flex p-4 space-x-2">
                        <Input
                            type="text"
                            placeholder="Add a new todo"
                            className="flex-grow"
                        />
                        <Button type="submit">
                            <Plus className="w-4 h-4 mr-2" />
                            Add
                        </Button>
                    </form>

                    {/* Todo List */}
                    <ScrollArea className="h-[60vh] p-4">
                        <ul className="space-y-2 h-full">
                            {todos.map((todo) => (
                                <li
                                    key={todo.id}
                                    className="flex items-center justify-between p-2 rounded-md hover:bg-accent"
                                >
                                    <span className="text-foreground">{todo.text}</span>
                                    <div className="space-x-2">
                                        <Button variant="ghost" size="icon">
                                            <Edit className="w-4 h-4" />
                                            <span className="sr-only">Edit</span>
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Trash2 className="w-4 h-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </div>
            </div>
        </section>

    )
}