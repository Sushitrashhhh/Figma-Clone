import type { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import type { Color, Layer } from "./types";

declare global {
  interface Liveblocks {
    // Each user's Presence
    Presence: {
      selection: string[];
      cursor: { x: number; y: number } | null;
      penColor: Color | null;
      pencilDraft: [number, number, number][] | null;
    };
    // The Storage tree for the room
    Storage: {
      roomColor: Color;
      layers: LiveMap<string, LiveObject<Layer>>;
      layerIds: LiveList<string>;
    };
    // Custom user info set when authenticating with a secret key
    UserMeta: {
      id: string;
      info: {
        name: string;
        avatar?: string;
      };
    };
  }
}

export {};
