import { createClient } from "@/lib/supabase/server";
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";

export async function getViewsCount(): Promise<{ slug: string; views: number }[]> {

  noStore();

  let supabase = createClient();
  let { data, error } = await supabase
    .from("ana")
    .select("*")
 
  return data
}



export async function increment(slug: string) {
    // Get the slug from the URL

    let URL =
      process.env.NODE_ENV === "production"
        ? "https://maxontech.io/api/view"
        : "http://localhost:3000/api/view";

    let res = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug,
      }),
    });

    if (res.status !== 200) {
      console.error("Failed to send analytics data");
    }
  };
