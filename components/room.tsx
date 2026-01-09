"use client";

import { ReactNode } from "react";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";
import { LiveList, LiveMap ,LiveObject} from "@liveblocks/client";
import { Layer } from "@/types/canvas";
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
    <RoomProvider id={roomId} initialPresence={{
      cursor: null, selection:[]
    }}   initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList([]), 
      }}>
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};