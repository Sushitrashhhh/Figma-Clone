import { Liveblocks } from "@liveblocks/node";
import { env } from "~/env";

const liveblocks = new Liveblocks({ secret: env.LIVEBLOCKS_SECRET_KEY! });

export const runtime = "nodejs";

export async function POST(req: Request) {
  // This route cannot use Prisma in the previous Edge Runtime configuration
  // Extract user data from the request body instead
  try {
    const { userId, userEmail, roomIds } = await req.json();
    
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const session = liveblocks.prepareSession(userId, {
      userInfo: {
        name: userEmail ?? "Anonymous",
      },
    });

    // Allow access to provided rooms
    if (Array.isArray(roomIds)) {
      roomIds.forEach((roomId: string) => {
        session.allow(`room:${roomId}`, session.FULL_ACCESS);
      });
    }

    const { status, body } = await session.authorize();

    return new Response(body, { status });
  } catch (error) {
    console.error("Liveblocks auth error:", error);
    return new Response("Unauthorized", { status: 401 });
  }
}