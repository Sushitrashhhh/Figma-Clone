import { Liveblocks } from "@liveblocks/node";
import { auth } from "../../../server/auth";

const liveblocks = new Liveblocks({ 
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string
});

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      console.log("❌ No authenticated user!");
      return new Response("Unauthorized", { status: 401 });
    }

    const { user } = session;
    
    // Additional safety check for TypeScript
    if (!user.id) {
      return new Response("Unauthorized", { status: 401 });
    }
    
    console.log("✅ Authenticated user:", user.id, user.email);

    const { room } = await req.json();
    console.log("Room requested:", room);

    const liveblocksSession = liveblocks.prepareSession(user.id, {
      userInfo: {
        name: user.name ?? user.email ?? "Anonymous",
      },
    });

    if (room) {
      liveblocksSession.allow(room, liveblocksSession.FULL_ACCESS);
    }

    const { status, body } = await liveblocksSession.authorize();
    console.log("✅ Auth successful, status:", status);

    return new Response(body, { status });
  } catch (error) {
    console.error("❌ Liveblocks auth error:", error);
    return new Response("Unauthorized", { status: 401 });
  }
}