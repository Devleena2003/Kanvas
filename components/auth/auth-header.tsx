"use client"

import { SignedIn, SignedOut, SignInButton, useOrganization, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import SearchInput from "@/app/(dashboard)/_components/search-input";
import { OrganizationSwitcher } from "@clerk/nextjs";
import InviteButton from "@/app/(dashboard)/_components/invite-button";
export const AuthHeader = () => {
    const { organization } =useOrganization()
    return (
        <div className="w-full border-b">
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
                <Image src="/image.png" alt="loading" width={50} height={50} />
                <div className="hidden lg:flex lg:flex-1 "><SearchInput /></div>
                <div className="block lg:hidden flex-1">
                     <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            maxWidth:"376px"
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "100%",
                            borderRadius: "8px",
                            border: "1px solid #E5E7EB",
                            justifyContent: "space-between",
                            backgroundColor: "white",
                        }
                }
                }} />
                </div>
                {organization && <InviteButton />}
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
