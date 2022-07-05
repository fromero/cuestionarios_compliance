import { serve } from "https://deno.land/std@0.147.0/http/server.ts";

async function handler(req) {
  const body = "";
  const resp = await fetch("https://173a0n56qe.execute-api.eu-west-1.amazonaws.com/newjwt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer e47bb63caae08e0dea4346f701bbcbf52ab717ad70f11f0710008c9bbe50431d",
    },
    body,
  });
  console.log(resp)
  
  return new Response(JSON.stringify(await resp.json()), {
    headers: { "content-type": "application/json" },
  });
}

serve(handler);

