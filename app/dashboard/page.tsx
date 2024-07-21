import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import React from "react";

function Dahboard() {
  return (
    <>
      {/* Start First Block  */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {/* Total revenue card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$100.000</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 charges
            </p>
          </CardContent>
        </Card>
        {/* Total sales card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="h-6 w-6 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">
              Total sales on Emarket
            </p>
          </CardContent>
        </Card>
        {/* Total Products card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="h-6 w-6 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">37</p>
            <p className="text-xs text-muted-foreground">
              Total Products created
            </p>
          </CardContent>
        </Card>
        {/* Total revenue card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <User2 className="h-6 w-6 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-muted-foreground">
              Total users signed up
            </p>
          </CardContent>
        </Card>
      </div>
      {/* End First Block  */}

      {/* Start Second Block  */}
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10 ">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              {" "}
              Reacent transaction from your store{" "}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reacent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4 ">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Abderraouf Filali</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,99.00</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Abderraouf Filali</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,99.00</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Abderraouf Filali</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,99.00</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Abderraouf Filali</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,99.00</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Abderraouf Filali</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,99.00</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Abderraouf Filali</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,99.00</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>AF</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Abderraouf Filali</p>
                <p className="text-sm text-muted-foreground">test@test.com</p>
              </div>
              <p className="ml-auto font-medium">+$1,99.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* End Second Block  */}
    </>
  );
}

export default Dahboard;
