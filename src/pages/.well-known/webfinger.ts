import { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      subject: "acct:sironheart@beisenherz.dev",
      links: [
        {
          rel: "http://openid.net/specs/connect/1.0/issuer",
          href: "https://auth.beisenherz.dev/",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    },
  );
