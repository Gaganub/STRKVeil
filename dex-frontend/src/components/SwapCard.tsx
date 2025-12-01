"use client";

import { useState } from "react";
import { ArrowDown, Settings, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TokenSelector } from "@/components/TokenSelector";
import { useWallet } from "@/context/WalletContext";
import { ConnectWalletModal } from "@/components/ConnectWalletModal";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Token {
    symbol: string;
    name: string;
    balance?: string;
    icon?: string;
}

export function SwapCard() {
    const { isConnected, balance } = useWallet();
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

    const [sellAmount, setSellAmount] = useState("");
    const [buyAmount, setBuyAmount] = useState("");

    const [sellToken, setSellToken] = useState<Token | null>({
        symbol: "ETH",
        name: "Ethereum",
        balance: balance,
        icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
    });
    const [buyToken, setBuyToken] = useState<Token | null>(null);

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [selectorType, setSelectorType] = useState<"sell" | "buy">("sell");

    const handleOpenSelector = (type: "sell" | "buy") => {
        setSelectorType(type);
        setIsSelectorOpen(true);
    };

    const handleSelectToken = (token: Token) => {
        if (selectorType === "sell") {
            setSellToken({ ...token, balance: isConnected ? balance : "0" });
        } else {
            setBuyToken(token);
        }
        setIsSelectorOpen(false);
    };

    return (
        <>
            <div className="bg-card border border-border rounded-3xl p-4 shadow-xl backdrop-blur-xl relative z-10">
                <div className="flex items-center justify-between mb-4 px-2">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="text-foreground font-medium bg-secondary/50 hover:bg-secondary">
                            Swap
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            Limit
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <Settings className="w-5 h-5" />
                    </Button>
                </div>

                <div className="space-y-1">
                    {/* Sell Input */}
                    <div className="bg-secondary/50 rounded-2xl p-4 hover:border-border/50 border border-transparent transition-colors">
                        <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm font-medium">Sell</span>
                            <span className="text-muted-foreground text-sm">Balance: {isConnected ? sellToken?.balance || "0" : "0"}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <input
                                type="text"
                                value={sellAmount}
                                onChange={(e) => setSellAmount(e.target.value)}
                                placeholder="0"
                                className="bg-transparent text-4xl font-medium outline-none w-full placeholder:text-muted-foreground/50"
                            />
                            <Button
                                variant="secondary"
                                onClick={() => handleOpenSelector("sell")}
                                className="rounded-full px-3 py-1 h-auto gap-2 bg-background border border-border hover:bg-background/80 shrink-0"
                            >
                                {sellToken ? (
                                    <>
                                        <div className="w-6 h-6 rounded-full overflow-hidden">
                                            {sellToken.icon ? (
                                                <Image src={sellToken.icon} alt={sellToken.symbol} width={24} height={24} />
                                            ) : (
                                                <div className="w-full h-full bg-blue-500 flex items-center justify-center text-[10px] text-white">{sellToken.symbol[0]}</div>
                                            )}
                                        </div>
                                        <span className="font-semibold text-lg">{sellToken.symbol}</span>
                                    </>
                                ) : (
                                    <span className="font-semibold text-lg">Select</span>
                                )}
                                <span className="text-xs">▼</span>
                            </Button>
                        </div>
                        <div className="text-muted-foreground text-sm mt-2">$0.00</div>
                    </div>

                    {/* Swap Arrow */}
                    <div className="relative h-2 z-10">
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3">
                            <div className="bg-card border border-border p-2 rounded-xl cursor-pointer hover:scale-110 transition-transform">
                                <ArrowDown className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </div>

                    {/* Buy Input */}
                    <div className="bg-secondary/50 rounded-2xl p-4 hover:border-border/50 border border-transparent transition-colors">
                        <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm font-medium">Buy</span>
                            <span className="text-muted-foreground text-sm">Balance: {isConnected ? buyToken?.balance || "0" : "0"}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <input
                                type="text"
                                value={buyAmount}
                                onChange={(e) => setBuyAmount(e.target.value)}
                                placeholder="0"
                                className="bg-transparent text-4xl font-medium outline-none w-full placeholder:text-muted-foreground/50"
                            />
                            <Button
                                variant={buyToken ? "secondary" : "default"}
                                onClick={() => handleOpenSelector("buy")}
                                className={cn(
                                    "rounded-full px-4 py-2 h-auto gap-2 shrink-0",
                                    buyToken ? "bg-background border border-border hover:bg-background/80" : "bg-primary hover:bg-primary/90"
                                )}
                            >
                                {buyToken ? (
                                    <>
                                        <div className="w-6 h-6 rounded-full overflow-hidden">
                                            {buyToken.icon ? (
                                                <Image src={buyToken.icon} alt={buyToken.symbol} width={24} height={24} />
                                            ) : (
                                                <div className="w-full h-full bg-blue-500 flex items-center justify-center text-[10px] text-white">{buyToken.symbol[0]}</div>
                                            )}
                                        </div>
                                        <span className="font-semibold text-lg">{buyToken.symbol}</span>
                                    </>
                                ) : (
                                    <span className="font-semibold text-lg">Select token</span>
                                )}
                                <span className="text-xs">▼</span>
                            </Button>
                        </div>
                        <div className="text-muted-foreground text-sm mt-2">$0.00</div>
                    </div>
                </div>

                <div className="mt-4">
                    {isConnected ? (
                        <Button className="w-full h-14 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                            Swap
                        </Button>
                    ) : (
                        <Button
                            onClick={() => setIsWalletModalOpen(true)}
                            className="w-full h-14 text-lg font-semibold rounded-2xl bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20"
                        >
                            Connect Wallet
                        </Button>
                    )}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground px-2">
                    <div className="flex items-center gap-1">
                        <span>Network cost</span>
                        <Info className="w-3 h-3" />
                    </div>
                    <div>$0.00</div>
                </div>
            </div>

            <TokenSelector
                isOpen={isSelectorOpen}
                onClose={() => setIsSelectorOpen(false)}
                onSelect={handleSelectToken}
            />

            <ConnectWalletModal
                isOpen={isWalletModalOpen}
                onClose={() => setIsWalletModalOpen(false)}
            />
        </>
    );
}
