"use client";

import type { CHAT_PROFILE_QUERYResult } from "@/sanity.types";

export function Chat({
  profile,
}: {
  profile: CHAT_PROFILE_QUERYResult | null;
}) {
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
}

export default Chat;
