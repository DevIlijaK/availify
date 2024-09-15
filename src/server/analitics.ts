import "server-only";

import { PostHog } from "posthog-node";

function ServerSideAnalitics() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  });
  return posthogClient;
}

const serverSideAnalitics = ServerSideAnalitics();

export default serverSideAnalitics;
