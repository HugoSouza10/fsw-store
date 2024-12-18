"use client"
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Cart from "@/components/ui/cart";

const Header = () => {
    //Aqui serve para verificar o status do login
    //Data: Contém os dados do usuário
    const { status, data } = useSession();
    const handleLoginClick = async () => {
        await signIn();
    }
    const handleLogoutClick = async () => {
        await signOut();
    }
    return (
       <Card className="flex justify-between p-[1.875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu
                    </SheetHeader>
                    {status === 'authenticated' && data?.user &&(
                        <div className="flex flex-col">
                             <div className="flex items-center gap-2 py-4">
                                <Avatar>
                                    <AvatarFallback>
                                        {data.user?.name?.[0].toUpperCase()}
                                    </AvatarFallback>
                                    {data.user.image && (
                                        <AvatarImage src={data.user.image} />
                                    )}
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="font-medium">{data.user?.name}</p>
                                    <p className="text-sm opacity-75">Boas compras!</p>
                                </div>
                            </div>
                            <Separator/>
                        </div>
                     )}
                
                    <div className="mt-2 flex flex-col gap-3">
                        {status === 'unauthenticated' && (
                           <Button onClick={handleLoginClick} className="w-full justify-start gap-2" variant="outline">
                               <LogInIcon size={16}/>
                                Fazer Login
                           </Button>
                        )}

                        {status === 'authenticated' && (
                            <Button onClick={handleLogoutClick} className="w-full justify-start gap-2" variant="outline">
                              <LogOutIcon size={16}/>
                               Fazer Logout
                            </Button>
                        )}

                      <SheetClose asChild>
                        <Link href='/'>
                                <Button className="w-full justify-start gap-2" variant="outline">
                                    <HomeIcon size={16}/>
                                    Início
                                </Button>
                            </Link>
                      </SheetClose>
                        
                        <Button className="w-full justify-start gap-2" variant="outline">
                            <PercentIcon size={16}/>
                             Ofertas
                        </Button>
                        <SheetClose asChild>
                            <Link href='/catalog'>
                                <Button className="w-full justify-start gap-2" variant="outline">
                                    <ListOrderedIcon size={16}/>
                                    Catálogo
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href='/'>
                <h1 className="font-semibold text-lg">
                    <span className="text-primary">FSW</span> Store
                </h1>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <ShoppingCartIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                   <Cart/>
                </SheetContent>
            </Sheet>
            
       </Card>
    )
}


export default Header;