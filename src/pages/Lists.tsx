import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Plus, Trash2, ShoppingCart, Package, Plane, CheckCircle2, Circle } from "lucide-react";

interface ListItem {
  id: string;
  text: string;
  completed: boolean;
  quantity?: number;
  category?: string;
}

interface CustomList {
  id: string;
  name: string;
  icon: string;
  items: ListItem[];
  color: string;
}

const Lists = () => {
  const [activeList, setActiveList] = useState("grocery");

  const [lists, setLists] = useState<CustomList[]>([
    {
      id: "grocery",
      name: "Grocery List",
      icon: "🛒",
      color: "bg-green-500",
      items: [
        { id: "1", text: "Milk", completed: false, quantity: 2, category: "Dairy" },
        { id: "2", text: "Eggs", completed: true, quantity: 1, category: "Dairy" },
        { id: "3", text: "Bread", completed: false, quantity: 1, category: "Bakery" },
        { id: "4", text: "Apples", completed: false, quantity: 6, category: "Fruits" },
        { id: "5", text: "Chicken Breast", completed: false, quantity: 2, category: "Meat" },
        { id: "6", text: "Rice", completed: true, quantity: 1, category: "Grains" },
        { id: "7", text: "Tomatoes", completed: false, quantity: 4, category: "Vegetables" },
        { id: "8", text: "Olive Oil", completed: false, quantity: 1, category: "Pantry" },
      ],
    },
    {
      id: "packing",
      name: "Packing List",
      icon: "🧳",
      color: "bg-blue-500",
      items: [
        { id: "1", text: "Passport", completed: true, category: "Documents" },
        { id: "2", text: "Travel Insurance", completed: true, category: "Documents" },
        { id: "3", text: "Phone Charger", completed: false, category: "Electronics" },
        { id: "4", text: "Laptop", completed: false, category: "Electronics" },
        { id: "5", text: "T-shirts (5)", completed: false, quantity: 5, category: "Clothes" },
        { id: "6", text: "Jeans (2)", completed: false, quantity: 2, category: "Clothes" },
        { id: "7", text: "Toiletries Bag", completed: false, category: "Personal Care" },
        { id: "8", text: "Sunscreen", completed: false, category: "Personal Care" },
        { id: "9", text: "Sunglasses", completed: true, category: "Accessories" },
        { id: "10", text: "Travel Pillow", completed: false, category: "Accessories" },
      ],
    },
    {
      id: "shopping",
      name: "Shopping List",
      icon: "🛍️",
      color: "bg-pink-500",
      items: [
        { id: "1", text: "New Running Shoes", completed: false, category: "Sports" },
        { id: "2", text: "Desk Lamp", completed: false, category: "Home" },
        { id: "3", text: "Books from Reading List", completed: false, category: "Books" },
        { id: "4", text: "Yoga Mat", completed: true, category: "Sports" },
        { id: "5", text: "Kitchen Organizer", completed: false, category: "Home" },
      ],
    },
    {
      id: "todo",
      name: "Home To-Do",
      icon: "🏠",
      color: "bg-orange-500",
      items: [
        { id: "1", text: "Fix leaking faucet", completed: false, category: "Repairs" },
        { id: "2", text: "Clean gutters", completed: false, category: "Maintenance" },
        { id: "3", text: "Paint bedroom wall", completed: true, category: "Improvement" },
        { id: "4", text: "Replace air filter", completed: false, category: "Maintenance" },
        { id: "5", text: "Organize garage", completed: false, category: "Cleaning" },
      ],
    },
    {
      id: "books",
      name: "Books to Read",
      icon: "📚",
      color: "bg-purple-500",
      items: [
        { id: "1", text: "Atomic Habits", completed: true, category: "Self-Help" },
        { id: "2", text: "Deep Work", completed: false, category: "Productivity" },
        { id: "3", text: "The Alchemist", completed: false, category: "Fiction" },
        { id: "4", text: "Sapiens", completed: false, category: "History" },
        { id: "5", text: "Can't Hurt Me", completed: true, category: "Biography" },
      ],
    },
    {
      id: "movies",
      name: "Movies Watchlist",
      icon: "🎬",
      color: "bg-red-500",
      items: [
        { id: "1", text: "The Shawshank Redemption", completed: true, category: "Drama" },
        { id: "2", text: "Inception", completed: false, category: "Sci-Fi" },
        { id: "3", text: "The Dark Knight", completed: true, category: "Action" },
        { id: "4", text: "Parasite", completed: false, category: "Thriller" },
        { id: "5", text: "Interstellar", completed: false, category: "Sci-Fi" },
      ],
    },
  ]);

  const currentList = lists.find(l => l.id === activeList) || lists[0];
  const completedCount = currentList.items.filter(item => item.completed).length;
  const totalCount = currentList.items.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const toggleItem = (listId: string, itemId: string) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.map(item =>
            item.id === itemId ? { ...item, completed: !item.completed } : item
          ),
        };
      }
      return list;
    }));
  };

  const deleteItem = (listId: string, itemId: string) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.filter(item => item.id !== itemId),
        };
      }
      return list;
    }));
  };

  const groupedItems = currentList.items.reduce((acc, item) => {
    const category = item.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as { [key: string]: ListItem[] });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">Lists</h1>
          <p className="text-muted-foreground mt-1">Organize everything in one place</p>
        </div>
        <Button className="bg-gradient-hero hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          New List
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {lists.map(list => {
          const completed = list.items.filter(i => i.completed).length;
          const total = list.items.length;
          const isActive = list.id === activeList;

          return (
            <Card
              key={list.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                isActive ? "ring-2 ring-primary shadow-lg" : ""
              }`}
              onClick={() => setActiveList(list.id)}
            >
              <CardContent className="p-4 text-center space-y-2">
                <div className="text-3xl">{list.icon}</div>
                <h3 className="font-semibold text-sm">{list.name}</h3>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3" />
                  {completed}/{total}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 ${currentList.color} rounded-full flex items-center justify-center text-2xl`}>
                {currentList.icon}
              </div>
              <div>
                <CardTitle>{currentList.name}</CardTitle>
                <CardDescription>
                  {completedCount} of {totalCount} items completed
                </CardDescription>
              </div>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              {progressPercentage.toFixed(0)}%
            </Badge>
          </div>
          <Progress value={progressPercentage} className="mt-4" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2">
            <Input placeholder="Add new item..." className="flex-1" />
            <Button className="bg-gradient-hero hover:opacity-90">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">
                All ({totalCount})
              </TabsTrigger>
              <TabsTrigger value="active">
                Active ({totalCount - completedCount})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {items.map(item => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
                      >
                        <Checkbox
                          checked={item.completed}
                          onCheckedChange={() => toggleItem(currentList.id, item.id)}
                          className="data-[state=checked]:bg-primary"
                        />
                        <div className="flex-1 flex items-center gap-2">
                          <span className={item.completed ? "line-through text-muted-foreground" : ""}>
                            {item.text}
                          </span>
                          {item.quantity && (
                            <Badge variant="secondary" className="text-xs">
                              x{item.quantity}
                            </Badge>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => deleteItem(currentList.id, item.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="active" className="space-y-2">
              {currentList.items
                .filter(item => !item.completed)
                .map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
                  >
                    <Checkbox
                      checked={item.completed}
                      onCheckedChange={() => toggleItem(currentList.id, item.id)}
                    />
                    <div className="flex-1 flex items-center gap-2">
                      <span>{item.text}</span>
                      {item.quantity && (
                        <Badge variant="secondary" className="text-xs">
                          x{item.quantity}
                        </Badge>
                      )}
                      {item.category && (
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteItem(currentList.id, item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-2">
              {currentList.items
                .filter(item => item.completed)
                .map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
                  >
                    <Checkbox
                      checked={item.completed}
                      onCheckedChange={() => toggleItem(currentList.id, item.id)}
                      className="data-[state=checked]:bg-primary"
                    />
                    <div className="flex-1 flex items-center gap-2">
                      <span className="line-through text-muted-foreground">{item.text}</span>
                      {item.quantity && (
                        <Badge variant="secondary" className="text-xs">
                          x{item.quantity}
                        </Badge>
                      )}
                      {item.category && (
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteItem(currentList.id, item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Lists;
