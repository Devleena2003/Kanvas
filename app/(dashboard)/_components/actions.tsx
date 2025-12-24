"use client"

import {DropdownMenu, DropdownMenuContent ,DropdownMenuSeparator,DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {  DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
interface ActionsProps{
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
}

export const Actions = ({
    children,
    side, sideOffset,
    id, title
}: ActionsProps) => {
const {mutate,pending}=useApiMutation(api.board.remove)
    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`
        ).then(()=>toast.success("Link copied to clipboard")).catch(()=>toast.error("Failed to copy link"))
    }
    const onDelete = () => {
        mutate({id}).then(()=>toast.success("Board deleted")).catch(()=>toast.error("Failed to delete board"))
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent onClick={(e) => e.stopPropagation()} side={side} sideOffset={sideOffset} className="w-60" >
                <DropdownMenuItem onClick={onCopyLink} className="cursor-pointer p-3"><Link2 className="h-4 w-4 mr-2" /> Copy Board Link</DropdownMenuItem>
                   <DropdownMenuItem onClick={onDelete} className="cursor-pointer p-3"><Trash2 className="h-4 w-4 mr-2"/> Delete</DropdownMenuItem>
                </DropdownMenuContent>
       </DropdownMenu>
    )
}