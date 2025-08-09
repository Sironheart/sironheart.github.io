import { APIContext } from "astro";

export const prerender = false;

export async function GET({ url }: APIContext) {
  const params = new URL(url).searchParams;
  const resource = params.get("resource");

  if (!resource) {
    console.info("No resource path was given!");
    return new Response(null, { status: 400 });
  }

  if (!resource.endsWith("beisenherz.dev")) {
    console.info("No valid domain was requested");
    return new Response(null, { status: 404 });
  }

  return new Response(
    JSON.stringify({
      subject: resource,
      properties: { "http://webfinger.example/ns/name": "Steffen Beisenherz" },
      links: [
        {
          rel: "http://openid.net/specs/connect/1.0/issuer",
          href: "https://auth.beisenherz.dev/application/o/main",
        },
      ],
    }),
    {
      headers: { "Content-Type": "application/jrd+json" },
    },
  );
}
