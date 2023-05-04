import clsx from "clsx";
import LogoDark from "@/components/Icons/LogoDark";
import Link from "next/link";

interface IProps {
  className?: string;
}

function LogoContainer({ className }: IProps) {
  return (
    <Link href="/" className={clsx("flex items-center", className)}>
      <figure>
        <LogoDark className="ml-[2.125rem]" />
      </figure>
    </Link>
  );
}

export default LogoContainer;
