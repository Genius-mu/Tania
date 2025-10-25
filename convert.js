import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public/images";
const outputDir = "./public/images/webp";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(async (file) => {
  if (file.endsWith(".jpg") || file.endsWith(".png")) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(
      outputDir,
      file.replace(/\.(jpg|png)$/i, ".webp")
    );

    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`✅ Converted ${file} → ${path.basename(outputPath)}`);
  }
});
