"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Token {
    symbol: string;
    name: string;
    balance?: string;
    icon?: string;
}

const POPULAR_TOKENS: Token[] = [
    { symbol: "ETH", name: "Ethereum", balance: "0", icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png" },
    { symbol: "USDC", name: "USD Coin", balance: "0", icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png" },
    { symbol: "USDT", name: "Tether USD", balance: "0", icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png" },
    { symbol: "WBTC", name: "Wrapped BTC", balance: "0", icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png" },
    { symbol: "STRK", name: "Starknet", balance: "0", icon: "https://assets.coingecko.com/coins/images/26433/small/starknet.png" },
];

interface TokenSelectorProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (token: Token) => void;
}

export function TokenSelector({ isOpen, onClose, onSelect }: TokenSelectorProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-card border border-border w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 border-b border-border/50">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Select a token</h2>
                        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-secondary">
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search name or paste address"
                            className="w-full bg-secondary/50 border border-transparent focus:border-primary/50 rounded-xl py-3 pl-10 pr-4 outline-none transition-colors"
                            autoFocus
                        />
                    </div>
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                        {POPULAR_TOKENS.map((token) => (
                            <button
                                key={token.symbol}
                                onClick={() => onSelect(token)}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors shrink-0"
                            >
                                <div className="w-5 h-5 rounded-full overflow-hidden">
                                    {token.icon && <Image src={token.icon} alt={token.symbol} width={20} height={20} />}
                                </div>
                                <span className="text-sm font-medium">{token.symbol}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-h-[400px] overflow-y-auto p-2">
                    <div className="text-xs font-medium text-muted-foreground px-2 py-2">Popular tokens</div>
                    {POPULAR_TOKENS.map((token) => (
                        <button
                            key={token.symbol}
                            onClick={() => onSelect(token)}
                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                                    {token.icon ? (
                                        <Image src={token.icon} alt={token.symbol} width={36} height={36} />
                                    ) : (
                                        <span className="text-sm font-bold">{token.symbol[0]}</span>
                                    )}
                                </div>
                                <div className="text-left">
                                    <div className="font-medium">{token.name}</div>
                                    <div className="text-xs text-muted-foreground">{token.symbol}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-medium">{token.balance}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
