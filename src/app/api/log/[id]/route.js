// api routes for logs
import { supabase } from "@/app/lib/supabaseClient";

// add params req to get single log
export async function GET() {
  let { data: log, error } = await supabase.from("log").select("*");

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify(log), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const { error } = await supabase.from("log").delete().eq("id", id);

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

export async function PATCH() {}