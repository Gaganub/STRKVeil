"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/context/WalletContext";
import { ConnectWalletModal } from "@/components/ConnectWalletModal";

export function Navbar() {
    const { isConnected, address, disconnect } = useWallet();
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between px-4 py-3 md:px-6 border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <Image src="/Logo.png" alt="STRKVeil Logo" width={32} height={32} className="object-contain" />
                        </div>
                        <span className="font-bold text-xl hidden sm:block">STRKVeil</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/swap" className="text-foreground hover:text-primary transition-colors">
                            Trade
                        </Link>
                        <Link href="/explore" className="hover:text-foreground transition-colors">
                            Explore
                        </Link>
                        <Link href="/pool" className="hover:text-foreground transition-colors">
                            Pool
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/50 border border-border/50 w-64 focus-within:border-primary/50 transition-colors">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search tokens"
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/70"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="hidden sm:flex">
                            <span className="mr-2">⚪</span> Ethereum
                        </Button>

                        {isConnected ? (
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={disconnect}
                                className="font-semibold rounded-full px-4"
                            >
                                {address?.slice(0, 6)}...{address?.slice(-4)}
                            </Button>
                        ) : (
                            <Button
                                size="sm"
                                onClick={() => setIsWalletModalOpen(true)}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
                            >
                                Connect
                            </Button>
                        )}

                        <Button variant="ghost" size="icon" className="sm:hidden">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </nav>

            <ConnectWalletModal
                isOpen={isWalletModalOpen}
                onClose={() => setIsWalletModalOpen(false)}
            />
        </>
    );
}
