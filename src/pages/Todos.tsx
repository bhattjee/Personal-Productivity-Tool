import { useState } from "react";
import { Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

type Priority = "high" | "medium" | "low";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  category: string;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Morning workout", completed: false, priority: "high", category: "Health" },
    { id: "2", title: "Review project proposal", completed: false, priority: "high", category: "Work" },
    { id: "3", title: "Buy groceries", completed: true, priority: "medium", category: "Personal" },
    { id: "4", title: "Call mom", completed: false, priority: "medium", category: "Personal" },
  ]);

  const priorityColors = {
    high: "bg-destructive text-destructive-foreground",
    medium: "bg-warning text-warning-foreground",
    low: "bg-muted text-muted-foreground",
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">To-Do List</h1>
          <p className="text-muted-foreground mt-1">
            {todos.filter(t => !t.completed).length} tasks remaining
          </p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="flex gap-3">
        <Input placeholder="Search tasks..." className="max-w-sm" />
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="space-y-3">
        {todos.map((todo) => (
          <Card key={todo.id} className={`bg-card border-border ${todo.completed ? 'opacity-60' : ''}`}>
            <CardContent className="flex items-center gap-4 p-4">
              <Checkbox 
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
              />
              <div className="flex-1">
                <h3 className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
                  {todo.title}
                </h3>
                <p className="text-sm text-muted-foreground">{todo.category}</p>
              </div>
              <Badge className={priorityColors[todo.priority]}>
                {todo.priority}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Todos;
