import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  console.log(_req);
  const payload = {hello: "World"}
  return new Response(JSON.stringify(payload), {
    headers: { "content-type": "application/json" },
  });
});