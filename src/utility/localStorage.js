const getStoredReadItem = () => {
  const storedReadItem = localStorage.getItem("readData");
  return storedReadItem ? JSON.parse(storedReadItem) : [];
};

const getStoredWishlistItem = () => {
  const storedWishlistItem = localStorage.getItem("wishlistData");
  return storedWishlistItem ? JSON.parse(storedWishlistItem) : [];
};

const saveReadItemToLocalStorage = (readDataId) => {
  const storedReadItem = getStoredReadItem();
  const updateReadItem = [...storedReadItem, readDataId];
  localStorage.setItem("readData", JSON.stringify(updateReadItem));
};

const saveWishlistToLocalStorage = (wishlistDataId) => {
  const storedWishlistItem = getStoredWishlistItem();
  const updateWishlistItem = [...storedWishlistItem, wishlistDataId];
  localStorage.setItem("wishlistData", JSON.stringify(updateWishlistItem));
};

const removeWishlistItemFromLocalStorage = (readDataId) => {
  const storedWishlistItem = getStoredWishlistItem();
  const updateWishlistItem = storedWishlistItem.filter(
    (id) => id !== readDataId,
  );
  localStorage.setItem("wishlistData", JSON.stringify(updateWishlistItem));
};

export {
  getStoredReadItem,
  getStoredWishlistItem,
  saveReadItemToLocalStorage,
  saveWishlistToLocalStorage,
  removeWishlistItemFromLocalStorage,
};
