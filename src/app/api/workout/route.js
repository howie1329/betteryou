import { supabase } from "@/app/lib/supabaseClient";

export async function GET() {
  let { data: item, error } = await supabase.from("workout").select("*");

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify(item), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
