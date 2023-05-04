interface IProps {
  className?: string;
}

function Ellipsis({ className }: IProps) {
  return (
    <svg
      width="5"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fillRule="evenodd">
        <circle cx="2.308" cy="2.308" r="2.308" />
        <circle cx="2.308" cy="10" r="2.308" />
        <circle cx="2.308" cy="17.692" r="2.308" />
      </g>
    </svg>
  );
}

export default Ellipsis;
