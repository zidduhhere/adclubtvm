/**
 * Utility to download an image from a URL, handling CORS pull-zone images cleanly
 * by converting to a Blob when possible, and falling back to direct anchor download.
 */
export async function downloadImage(url: string, filename?: string): Promise<boolean> {
  if (!url) return false;

  const urlBasename = url.split("/").pop()?.split("?")[0] || "image.jpg";
  const ext = urlBasename.split(".").pop()?.toLowerCase() || "jpg";
  const validExt = ["jpg", "jpeg", "png", "webp", "gif"].includes(ext) ? ext : "jpg";

  let cleanName = filename
    ? filename.trim().replace(/[^a-zA-Z0-9_\-\s]/g, "").replace(/\s+/g, "_")
    : urlBasename.replace(/\.[^/.]+$/, "");

  if (!cleanName.toLowerCase().endsWith(`.${validExt}`)) {
    cleanName = `${cleanName}.${validExt}`;
  }

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = cleanName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 1500);
    return true;
  } catch (error) {
    // Direct link trigger fallback
    try {
      const a = document.createElement("a");
      a.href = url;
      a.download = cleanName;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return true;
    } catch {
      window.open(url, "_blank");
      return true;
    }
  }
}
