//Client Side services for connecting wallet
"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/context/WalletContext";
import Image from "next/image";

interface ConnectWalletModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WALLETS = [
    { id: "argent", name: "Argent X", icon: "/argent.png" }, // We'll need these icons or use placeholders
    { id: "braavos", name: "Braavos", icon: "/braavos.png" },
    { id: "metamask", name: "MetaMask", icon: "/metamask.png" },
];

export function ConnectWalletModal({ isOpen, onClose }: ConnectWalletModalProps) {
    const { connect } = useWallet();

    if (!isOpen) return null;

    const handleConnect = async (walletId: string) => {
        await connect(walletId);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-card border border-border w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-4 border-b border-border/50 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Connect Wallet</h2>
                    <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-secondary">
                        <X className="w-5 h-5" />
                    </Button>
                </div>

                <div className="p-4 space-y-2">
                    {WALLETS.map((wallet) => (
                        <button
                            key={wallet.id}
                            onClick={() => handleConnect(wallet.id)}
                            className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-secondary/50 transition-colors group border border-transparent hover:border-border/50"
                        >
                            <span className="font-medium">{wallet.name}</span>
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs">
                                {/* Placeholder for icon if image fails */}
                                {wallet.name[0]}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="p-4 text-center text-xs text-muted-foreground border-t border-border/50">
                    By connecting a wallet, you agree to STRKVeil&apos;s Terms of Service.
                </div>
            </div>
        </div>
    );
}
