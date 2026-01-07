import { Room } from "@/components/room"; // adjust path as needed
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";
// import your Canvas or other components here

interface BoardIdPageProps {
  params: Promise<{
    boardId: string;
  }>;
}

export default async function BoardIdPage({ params }: BoardIdPageProps) {
  // 1. Await the params to extract boardId
  const { boardId } = await params;

  // 2. Pass the awaited boardId to your Room component
  return (
    <Room roomId={boardId} fallback={<Loading/>}>
    <Canvas boardId={boardId}/></Room>
  );
}