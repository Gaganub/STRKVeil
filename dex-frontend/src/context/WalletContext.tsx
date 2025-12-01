"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface WalletContextType {
    isConnected: boolean;
    address: string | null;
    balance: string;
    connect: (walletId: string) => Promise<void>;
    disconnect: () => void;
    isConnecting: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
    const [isConnected, setIsConnected] = useState(false);
    const [address, setAddress] = useState<string | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);
    const [balance, setBalance] = useState("0");

    // Load state from local storage on mount
    useEffect(() => {
        let mounted = true;
        const storedConnected = localStorage.getItem("isConnected");
        const storedAddress = localStorage.getItem("address");
        if (storedConnected === "true" && storedAddress) {
            if (mounted) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsConnected(true);
                setAddress(storedAddress);
                setBalance("12.5"); // Mock balance
            }
        }
        return () => {
            mounted = false;
        };
    }, []);

    const connect = async (walletId: string) => {
        setIsConnecting(true);
        console.log("Connecting to wallet:", walletId); // Fix unused variable warning

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockAddress = "0x1234...5678";
        setIsConnected(true);
        setAddress(mockAddress);
        setBalance("12.5");
        setIsConnecting(false);

        localStorage.setItem("isConnected", "true");
        localStorage.setItem("address", mockAddress);
    };

    const disconnect = () => {
        setIsConnected(false);
        setAddress(null);
        setBalance("0");
        localStorage.removeItem("isConnected");
        localStorage.removeItem("address");
    };

    return (
        <WalletContext.Provider
            value={{
                isConnected,
                address,
                balance,
                connect,
                disconnect,
                isConnecting,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
