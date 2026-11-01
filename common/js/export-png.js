const target = document.querySelector("#target");
const button = document.querySelector("#download");

button.addEventListener("click", async () => {
  if (!target) {
    console.error("#target が見つかりません。");
    return;
  }

  await document.fonts.ready;

  try {
    const canvas = await html2canvas(target, {
      scale: 3,
      backgroundColor: null,
      logging: true,
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "target.png";
    link.click();

  } catch (error) {
    console.error("PNGの書き出しに失敗しました:", error);
  }
});