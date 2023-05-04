import Page from "@/components/Page";

interface IProps {
  params: {
    boardId: string;
  };
}

export default function Board({ params }: IProps) {
  return <Page boardId={params.boardId} />;
}
