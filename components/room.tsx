"use client";

import { ReactNode } from "react";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";

export const Room = ({ 
  children, 
  roomId, 
  fallback = <div>Loading...</div> 
}: { 
  children: ReactNode; 
  roomId: string; 
  fallback?: NonNullable<ReactNode> | null; 
}) => {
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};