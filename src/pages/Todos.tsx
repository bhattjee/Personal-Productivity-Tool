import { useState } from "react";
import { Plus, Filter, Calendar, Repeat, Archive, Search, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Priority = "high" | "medium" | "low";

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  category: string;
  dueDate?: string;
  recurring?: "daily" | "weekly" | "monthly";
  subtasks?: Subtask[];
  notes?: string;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { 
      id: "1", 
      title: "Morning workout", 
      completed: false, 
      priority: "high", 
      category: "Health",
      dueDate: "2025-10-03",
      recurring: "daily",
      subtasks: [
        { id: "1a", title: "Warm up 10 mins", completed: true },
        { id: "1b", title: "Cardio 20 mins", completed: false },
        { id: "1c", title: "Stretching", completed: false }
      ]
    },
    { 
      id: "2", 
      title: "Review project proposal", 
      completed: false, 
      priority: "high", 
      category: "Work",
      dueDate: "2025-10-02",
      notes: "Focus on budget section"
    },
    { 
      id: "3", 
      title: "Buy groceries", 
      completed: true, 
      priority: "medium", 
      category: "Personal",
      subtasks: [
        { id: "3a", title: "Vegetables", completed: true },
        { id: "3b", title: "Fruits", completed: true },
        { id: "3c", title: "Dairy", completed: true }
      ]
    },
    { 
      id: "4", 
      title: "Call mom", 
      completed: false, 
      priority: "medium", 
      category: "Personal",
      recurring: "weekly"
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [expandedTodos, setExpandedTodos] = useState<Set<string>>(new Set());

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

  const toggleSubtask = (todoId: string, subtaskId: string) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoId && todo.subtasks) {
        return {
          ...todo,
          subtasks: todo.subtasks.map(sub =>
            sub.id === subtaskId ? { ...sub, completed: !sub.completed } : sub
          )
        };
      }
      return todo;
    }));
  };

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedTodos);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedTodos(newExpanded);
  };

  const archiveCompleted = () => {
    setTodos(todos.filter(t => !t.completed));
  };

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority = filterPriority === "all" || todo.priority === filterPriority;
    return matchesSearch && matchesPriority;
  });

  const activeTodos = filteredTodos.filter(t => !t.completed);
  const completedTodos = filteredTodos.filter(t => t.completed);

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

      <div className="flex gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search tasks..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={filterPriority} onValueChange={setFilterPriority}>
          <SelectTrigger className="w-[140px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={archiveCompleted}>
          <Archive className="h-4 w-4 mr-2" />
          Archive ({completedTodos.length})
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="active">Active ({activeTodos.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedTodos.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-3 mt-4">
          {activeTodos.map((todo) => (
            <Card key={todo.id} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="font-medium">{todo.title}</h3>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <Badge variant="secondary" className="text-xs">{todo.category}</Badge>
                          <Badge className={`${priorityColors[todo.priority]} text-xs`}>
                            {todo.priority}
                          </Badge>
                          {todo.dueDate && (
                            <Badge variant="outline" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              {todo.dueDate}
                            </Badge>
                          )}
                          {todo.recurring && (
                            <Badge variant="outline" className="text-xs">
                              <Repeat className="h-3 w-3 mr-1" />
                              {todo.recurring}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {todo.notes && (
                      <p className="text-sm text-muted-foreground">{todo.notes}</p>
                    )}

                    {todo.subtasks && todo.subtasks.length > 0 && (
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(todo.id)}
                          className="h-6 px-2"
                        >
                          {expandedTodos.has(todo.id) ? (
                            <ChevronDown className="h-4 w-4 mr-1" />
                          ) : (
                            <ChevronRight className="h-4 w-4 mr-1" />
                          )}
                          Subtasks ({todo.subtasks.filter(s => s.completed).length}/{todo.subtasks.length})
                        </Button>
                        
                        {expandedTodos.has(todo.id) && (
                          <div className="space-y-2 pl-6">
                            {todo.subtasks.map((subtask) => (
                              <div key={subtask.id} className="flex items-center gap-2">
                                <Checkbox
                                  checked={subtask.completed}
                                  onCheckedChange={() => toggleSubtask(todo.id, subtask.id)}
                                />
                                <span className={`text-sm ${subtask.completed ? 'line-through text-muted-foreground' : ''}`}>
                                  {subtask.title}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {activeTodos.length === 0 && (
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center text-muted-foreground">
                No active tasks. Click "Add Task" to create one!
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-3 mt-4">
          {completedTodos.map((todo) => (
            <Card key={todo.id} className="bg-card border-border opacity-60">
              <CardContent className="flex items-center gap-4 p-4">
                <Checkbox 
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <div className="flex-1">
                  <h3 className="font-medium line-through">{todo.title}</h3>
                  <p className="text-sm text-muted-foreground">{todo.category}</p>
                </div>
                <Badge className={priorityColors[todo.priority]}>
                  {todo.priority}
                </Badge>
              </CardContent>
            </Card>
          ))}
          {completedTodos.length === 0 && (
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center text-muted-foreground">
                No completed tasks yet.
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Todos;
