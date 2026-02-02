export function extractYoutubeId(url: string): string | null {
  try {
    const u = new URL(url);

    // https://www.youtube.com/watch?v=ID
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }

    // https://youtu.be/ID
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1);
    }

    return null;
  } catch {
    return null;
  }
}
