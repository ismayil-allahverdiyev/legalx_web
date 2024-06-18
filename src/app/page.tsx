import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        Home page
      </p>
      <Link href={"/auth"}>
        Auth page
      </Link>
    </>
  );
}
