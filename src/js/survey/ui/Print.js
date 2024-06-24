import events from "enketo-core/src/js/event";
import * as printHelper from "enketo-core/src/js/print";

const imagesLoaded = function imagesLoaded() {
  return new Promise((resolve) => {
    let images = [...document.images];
    const interval = setInterval(() => {
      images = images.filter((image) => !image.complete);
      if (images.length === 0) {
        clearInterval(interval);
        resolve();
      }
    }, 150);
  });
};

export async function applyPrintStyle() {
  try {
    await imagesLoaded();

    printHelper.openAllDetails();

    document
      .querySelectorAll(".question")
      .forEach((question) => question.dispatchEvent(events.Printify()));

    /*
    if (formTheme === "grid" || (!formTheme && printHelper.isGrid())) {
      const paper = {
        format: settings.format,
        landscape: settings.landscape,
        scale: settings.scale,
        margin: settings.margin,
      };

      return printHelper.fixGrid(paper);
    }*/
  } catch (e) {
    console.error(e);
  }
}
