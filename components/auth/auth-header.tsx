"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
export const AuthHeader = () => {
    return (
        <div className="w-full border-b">
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
                <Image src="/image.png" alt="loading" width={50} height={50} />
                <SignedOut>
                    <SignInButton>
                        <button className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                            Sign in
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </div>
    );
};
