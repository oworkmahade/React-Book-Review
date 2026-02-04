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

  if (!storedReadItem.includes(readDataId)) {
    const updateReadItem = [...storedReadItem, readDataId];
    localStorage.setItem("readData", JSON.stringify(updateReadItem));
  }
};

const saveWishlistToLocalStorage = (wishlistDataId) => {
  const storedWishlistItem = getStoredWishlistItem();

  if (!storedWishlistItem.includes(wishlistDataId)) {
    const updateWishlistItem = [...storedWishlistItem, wishlistDataId];
    localStorage.setItem("wishlistData", JSON.stringify(updateWishlistItem));
  }
};

export {
  getStoredReadItem,
  getStoredWishlistItem,
  saveReadItemToLocalStorage,
  saveWishlistToLocalStorage,
};
