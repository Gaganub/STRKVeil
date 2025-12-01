import { SwapCard } from "@/components/SwapCard";

export default function SwapPage() {
    return (
        <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-b from-background via-background to-primary/5">
            <div className="w-full max-w-md relative">
                {/* Background blobs for aesthetic */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse delay-1000" />

                <SwapCard />
            </div>
        </div>
    );
}
