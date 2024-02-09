import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: blogs } = await supabase.from("blogs").select("*");
  return (
    <main className="w-[1000px] mx-auto mt-10">
      <h1>Hello</h1>
      <pre>{JSON.stringify(blogs, null, 2)}</pre>
    </main>
  );
}
