
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
     click <Link href="/documents/123"> <span className="text-blue-400 underline"> &nbsp;here &nbsp;</span> to go document id</Link>
    </div>
  );
};

export default Home;
