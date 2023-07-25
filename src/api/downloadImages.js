function downloadImages(urls) {
  const promises = urls.map(async (url) => {
    if (url?.image) {
      let blobImage = await fetchImage(url?.image);
      return {
        product_id: url?._id,
        downloadProductImage: blobImage,
      };
    }
  });

  return Promise.all(promises)
    .then((imageBlobs) => {
      // Process the imageBlobs array, which contains the downloaded images as Blobs
      // You can save the Blobs to IndexedDB, display the images, or do anything else with them
      console.log("Images downloaded successfully:", imageBlobs);
      return imageBlobs;
    })
    .catch((error) => {
      console.error("Error downloading images:", error);
    });
}

function fetchImage(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
      // You can handle the error here, e.g., return a placeholder image Blob
      return new Blob(); // Placeholder Blob if fetching fails
    });
}

async function filterImagesUrlFromProductsArr(products) {
  let filteredImages = products
    .map((productItem) => productItem)
    .filter(Boolean);
  console.log("filteredImages", filteredImages);
  let downloadedImages = await downloadImages(filteredImages);
  console.log(
    "🚀 ~ file: downloadImages.js:45 ~ filterImagesUrlFromProductsArr ~ downloadedImages:",
    downloadedImages
  );
  const filterOnlyDownloadedImages = downloadedImages.filter(Boolean);
  return filterOnlyDownloadedImages;
}

module.exports = { filterImagesUrlFromProductsArr };
