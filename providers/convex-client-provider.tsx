"use client"
import { AuthHeader } from "@/components/auth/auth-header";
import { Loading } from "@/components/auth/loading";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, ConvexReactClient } from "convex/react";
import { usePathname } from "next/navigation";

interface ConvexClientProviderProps {
    children: React.ReactNode
}
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl)

export const ConvexClientProvider = ({
    children,
}: ConvexClientProviderProps) => {
    const pathname = usePathname();
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <AuthLoading><Loading /></AuthLoading>
                {!(pathname?.startsWith("/board")) && <AuthHeader />}
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}