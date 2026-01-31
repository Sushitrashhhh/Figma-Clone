"use client";

import { useMutation, useSelf } from "@liveblocks/react";
import type { LiveList, LiveMap } from "@liveblocks/client";

export default function useDeleteLayers() {
  const selection = useSelf((me: any) => me.presence.selection);

  return useMutation(
    ({ storage, setMyPresence }: { storage: any; setMyPresence: any }) => {
      const liveLayers = storage.get("layers") as LiveMap<string, any>;
      const liveLayerIds = storage.get("layerIds") as LiveList<string>;

      for (const id of selection ?? []) {
        liveLayers.delete(id);

        const index = liveLayerIds.indexOf(id);
        if (index !== -1) {
          liveLayerIds.delete(index);
        }
      }

      setMyPresence({ selection: [] }, { addToHistory: true });
    },
    [selection],
  );
}