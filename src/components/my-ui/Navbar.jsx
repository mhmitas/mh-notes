'use client'
import Link from "next/link"
import { Menu, Notebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Todo", href: "/todo" },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background dark:border-b shadow">
            <div className="my-container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold flex items-center">
                            <Notebook className="text-blue-500" /> <span>MH</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-foreground hover:bg-accent hover:text-accent-foreground",
                                        pathname === item.href && 'bg-accent text-accent-foreground',
                                        "px-3 py-2 rounded-md text-sm font-medium",
                                        "transition-colors duration-200"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {navItems.map((item) => (
                                    <DropdownMenuItem key={item.name} asChild>
                                        <Link
                                            href={item.href}
                                            className="w-full text-foreground hover:bg-accent hover:text-accent-foreground"
                                        >
                                            {item.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}