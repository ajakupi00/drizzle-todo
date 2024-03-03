import { getData } from "@/actions/todoActions";
import Todos from "@/components/Todos";
import Image from "next/image";

export default async function Home() {
  const data = await getData();

  return <Todos todos={data} />;
}
