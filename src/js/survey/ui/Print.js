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

    // remove .pages class from the form
    document.querySelector("form.or").classList.remove("pages");

    if (printHelper.isGrid()) {
      const paper = {
        format: "A4",
        landscape: false,
      };

      return printHelper.fixGrid(paper);
    }

    window.printReady = true;
  } catch (e) {
    console.error(e);
  }
}
