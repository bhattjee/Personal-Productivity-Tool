import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Plus, TrendingDown, TrendingUp, Wallet, CreditCard, DollarSign, PieChart } from "lucide-react";

interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: "expense" | "income";
  paymentMethod: string;
}

interface Budget {
  category: string;
  limit: number;
  spent: number;
  icon: string;
}

const Expenses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const expenses: Expense[] = [
    { id: "1", title: "Grocery Shopping", amount: 85.50, category: "Food", date: "2025-01-15", type: "expense", paymentMethod: "Credit Card" },
    { id: "2", title: "Gym Membership", amount: 50.00, category: "Health", date: "2025-01-14", type: "expense", paymentMethod: "Debit Card" },
    { id: "3", title: "Monthly Salary", amount: 4500.00, category: "Salary", date: "2025-01-13", type: "income", paymentMethod: "Bank Transfer" },
    { id: "4", title: "Restaurant Dinner", amount: 65.00, category: "Food", date: "2025-01-12", type: "expense", paymentMethod: "Cash" },
    { id: "5", title: "Uber Ride", amount: 18.50, category: "Transport", date: "2025-01-11", type: "expense", paymentMethod: "Credit Card" },
    { id: "6", title: "Netflix Subscription", amount: 15.99, category: "Entertainment", date: "2025-01-10", type: "expense", paymentMethod: "Credit Card" },
    { id: "7", title: "Freelance Project", amount: 800.00, category: "Freelance", date: "2025-01-09", type: "income", paymentMethod: "PayPal" },
    { id: "8", title: "Electric Bill", amount: 120.00, category: "Utilities", date: "2025-01-08", type: "expense", paymentMethod: "Bank Transfer" },
  ];

  const budgets: Budget[] = [
    { category: "Food", limit: 500, spent: 150.50, icon: "🍔" },
    { category: "Transport", limit: 200, spent: 18.50, icon: "🚗" },
    { category: "Entertainment", limit: 150, spent: 15.99, icon: "🎬" },
    { category: "Health", limit: 300, spent: 50.00, icon: "💪" },
    { category: "Utilities", limit: 400, spent: 120.00, icon: "💡" },
    { category: "Shopping", limit: 300, spent: 0, icon: "🛍️" },
  ];

  const totalIncome = expenses.filter(e => e.type === "income").reduce((sum, e) => sum + e.amount, 0);
  const totalExpenses = expenses.filter(e => e.type === "expense").reduce((sum, e) => sum + e.amount, 0);
  const balance = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? ((balance / totalIncome) * 100).toFixed(1) : 0;

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || expense.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(expenses.map(e => e.category))];

  const categoryColors: { [key: string]: string } = {
    Food: "bg-orange-500",
    Health: "bg-green-500",
    Transport: "bg-blue-500",
    Entertainment: "bg-purple-500",
    Utilities: "bg-yellow-500",
    Shopping: "bg-pink-500",
    Salary: "bg-emerald-500",
    Freelance: "bg-indigo-500",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">Expense Tracker</h1>
          <p className="text-muted-foreground mt-1">Manage your finances and budgets</p>
        </div>
        <Button className="bg-gradient-hero hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-500" />
              Total Income
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">${totalIncome.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-red-500" />
              Total Expenses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">${totalExpenses.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <Wallet className="h-4 w-4 text-primary" />
              Balance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${balance.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">Current balance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Savings Rate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{savingsRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">Of total income</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="budgets">Budgets</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Track all your income and expenses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Input
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-2 rounded-md border border-input bg-background"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                {filteredExpenses.map(expense => (
                  <div
                    key={expense.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full ${categoryColors[expense.category] || "bg-gray-500"} flex items-center justify-center`}>
                        {expense.type === "income" ? (
                          <TrendingUp className="h-5 w-5 text-white" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{expense.title}</p>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{expense.category}</Badge>
                          <span className="text-xs text-muted-foreground">{expense.paymentMethod}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${expense.type === "income" ? "text-green-500" : "text-red-500"}`}>
                        {expense.type === "income" ? "+" : "-"}${expense.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{expense.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budgets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Budgets</CardTitle>
              <CardDescription>Track spending limits by category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {budgets.map(budget => {
                const percentage = (budget.spent / budget.limit) * 100;
                const isOverBudget = percentage > 100;
                const isWarning = percentage > 80 && percentage <= 100;

                return (
                  <div key={budget.category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{budget.icon}</span>
                        <div>
                          <p className="font-medium">{budget.category}</p>
                          <p className="text-xs text-muted-foreground">
                            ${budget.spent.toFixed(2)} of ${budget.limit.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <Badge variant={isOverBudget ? "destructive" : isWarning ? "outline" : "secondary"}>
                        {percentage.toFixed(0)}%
                      </Badge>
                    </div>
                    <Progress 
                      value={Math.min(percentage, 100)} 
                      className={isOverBudget ? "bg-red-200" : isWarning ? "bg-yellow-200" : ""}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Spending Analytics
              </CardTitle>
              <CardDescription>Insights into your spending patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gradient-card">
                  <h4 className="font-semibold mb-2">Top Spending Category</h4>
                  <p className="text-2xl font-bold">Food</p>
                  <p className="text-sm text-muted-foreground">$150.50 this month</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-card">
                  <h4 className="font-semibold mb-2">Average Daily Spending</h4>
                  <p className="text-2xl font-bold">$23.14</p>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-card">
                  <h4 className="font-semibold mb-2">Most Used Payment</h4>
                  <p className="text-2xl font-bold flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Credit Card
                  </p>
                  <p className="text-sm text-muted-foreground">43% of transactions</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-card">
                  <h4 className="font-semibold mb-2">Budget Health</h4>
                  <p className="text-2xl font-bold text-green-500">Good</p>
                  <p className="text-sm text-muted-foreground">Under budget in 5/6 categories</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-semibold">Spending by Category</h4>
                {Object.entries(
                  expenses
                    .filter(e => e.type === "expense")
                    .reduce((acc, e) => {
                      acc[e.category] = (acc[e.category] || 0) + e.amount;
                      return acc;
                    }, {} as { [key: string]: number })
                ).map(([category, amount]) => (
                  <div key={category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${categoryColors[category]}`} />
                      <span>{category}</span>
                    </div>
                    <span className="font-semibold">${amount.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Expenses;
