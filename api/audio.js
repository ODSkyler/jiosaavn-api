import crypto from "crypto";

export const config = {
  regions: ["bom1"]
};

function decryptMediaUrl(
  encryptedUrl
) {
  const key =
    Buffer.from("38346591");

  const decipher =
    crypto.createDecipheriv(
      "des-ecb",
      key,
      null
    );

  decipher.setAutoPadding(true);

  let decrypted =
    decipher.update(
      encryptedUrl,
      "base64",
      "utf8"
    );

  decrypted +=
    decipher.final("utf8");

  return decrypted;
}

function changeQuality(
  url,
  quality
) {
  const allowed = [
    "12",
    "48",
    "96",
    "160",
    "320"
  ];

  if (
    !allowed.includes(
      String(quality)
    )
  ) {
    quality = "96";
  }

  return url.replace(
    /_(12|48|96|160|320)\.mp4/g,
    `_${quality}.mp4`
  );
}

export default async function handler(
  req,
  res
) {
  try {
    const encrypted =
      req.query.url;

    const quality =
      req.query.quality ||
      "96";

    if (!encrypted) {
      return res.status(400).json({
        status: false,
        message:
          "Missing encrypted url",
      });
    }

    const decrypted =
      decryptMediaUrl(
        encrypted
      );

    const finalUrl =
      changeQuality(
        decrypted,
        quality
      );

    return res.status(200).json({
      status: true,

      quality,

      url: finalUrl,
    });

  } catch (err) {
    return res.status(500).json({
      status: false,
      message:
        err.message,
    });
  }
}
