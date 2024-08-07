import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
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
                    <div className="mt-2 flex flex-col gap-3">
                        <Button className="w-full justify-start gap-2" variant="outline">
                            <LogInIcon size={16}/>
                             Fazer Login
                        </Button>
                        <Button className="w-full justify-start gap-2" variant="outline">
                            <HomeIcon size={16}/>
                             Início
                        </Button>
                        <Button className="w-full justify-start gap-2" variant="outline">
                            <PercentIcon size={16}/>
                             Ofertas
                        </Button>
                        <Button className="w-full justify-start gap-2" variant="outline">
                            <ListOrderedIcon size={16}/>
                             Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
            <h1 className="font-semibold text-lg">
                <span className="text-primary">FSW</span> Store
            </h1>
            <Button size="icon" variant="outline">
                <ShoppingCartIcon/>
            </Button>
       </Card>
    )
}


export default Header;