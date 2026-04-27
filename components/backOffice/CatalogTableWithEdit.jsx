"use client"
import { useState } from "react";
import CatalogTable from "./CatalogTable";
import SlideOverPanel from "./SlideOverPanel";
import BannerEditForm from "./editForms/BannerEditForm";
import CategoryEditForm from "./editForms/CategoryEditForm";
import CouponEditForm from "./editForms/CouponEditForm";
import ProductEditForm from "./editForms/ProductEditForm";

const EDIT_FORMS = {
  banner: BannerEditForm,
  category: CategoryEditForm,
  coupon: CouponEditForm,
  product: ProductEditForm,
};

export default function CatalogTableWithEdit({
  title,
  columns,
  rows,
  emptyMessage,
  editFormType,
  panelTitle,
  panelDescription,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const EditFormComponent = EDIT_FORMS[editFormType];

  function handleEdit(row) {
    setSelectedItem(row);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
    setSelectedItem(null);
  }

  const rowsWithHandlers = rows.map((row) => ({
    ...row,
    editHref: undefined,
    onEdit: () => handleEdit(row),
  }));

  return (
    <>
      <CatalogTable
        title={title}
        columns={columns}
        rows={rowsWithHandlers}
        emptyMessage={emptyMessage}
      />
      <SlideOverPanel
        isOpen={isOpen}
        onClose={handleClose}
        title={panelTitle || "Edit"}
        description={panelDescription}
      >
        {selectedItem && EditFormComponent && (
          <EditFormComponent
            itemId={selectedItem.id}
            onClose={handleClose}
          />
        )}
      </SlideOverPanel>
    </>
  );
}
