interface IProps {
  className?: string;
}

function Drag({ className }: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
    >
      <circle cx="92" cy="60" r="16" />
      <circle cx="164" cy="60" r="16" />
      <circle cx="92" cy="128" r="16" />
      <circle cx="164" cy="128" r="16" />
      <circle cx="92" cy="196" r="16" />
      <circle cx="164" cy="196" r="16" />
    </svg>
  );
}

export default Drag;
