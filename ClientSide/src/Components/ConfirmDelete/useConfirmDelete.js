import { useState } from "react";

const useConfirmDelete = () => {
  const [itemId, setitemId] = useState(null);
  const [isOpen, setisOpen] = useState(false);

  const openConfirmDelete = (id) => {
    setitemId(id);
    setisOpen(true);
  };
  const closeConfirmDelete = () => {
    setitemId(null);
    setisOpen(false);
  };

  return {
    openConfirmDelete,
    closeConfirmDelete,
    itemId,
    isOpen,
  };
};

export default useConfirmDelete;
