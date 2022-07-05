import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

serve((_req) => {
  const payload = {hello: "World"}
  return new Response(payload, {
    headers: { "content-type": "application/json" },
  });
});