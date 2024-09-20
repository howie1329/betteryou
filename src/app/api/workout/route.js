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

export async function POST(req) {
  const body = await req.json();
  console.log(body);
  const { data, error } = await supabase
    .from("workout")
    .insert([body])
    .select();

  if (!body) {
    return new Response(JSON.stringify({ error: "Invalid data" }), {
      status: 400,
    });
  }

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true, data }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
