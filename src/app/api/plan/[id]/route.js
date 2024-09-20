import { supabase } from "@/app/lib/supabaseClient";

export async function DELETE(req, { params }) {
  const { id } = params;
  const { error } = await supabase
    .from("plan")
    .delete()
    .eq("id", id.toString());
  if (error != null) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(req, { params }) {
  const { id } = params;
  const body = req.json();

  const { data, error } = await supabase
    .from("plan")
    .update(body)
    .eq("id", id.toString())
    .select();

  if (error != null) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
