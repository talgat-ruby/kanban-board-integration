import Sidebar from "@/components/Sidebar";
import BoardViewer from "@/components/BoardViewer";

interface IProps {
  params: {
    id: string;
  };
}

export default function Board({ params }: IProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar boardId={params.id} />
      <BoardViewer id={params.id} />
    </main>
  );
}
