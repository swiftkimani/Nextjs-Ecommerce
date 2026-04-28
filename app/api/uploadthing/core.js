import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  categoryimageUploader: f({ image: { maxFileSize: "1MB" } })
    .onUploadComplete(async () => {
      return { uploadedBy: "shannytech" };
    }),
  bannerImageUploader: f({ image: { maxFileSize: "2MB" } })
    .onUploadComplete(async () => {
      return { uploadedBy: "shannytech" };
    }),
  marketLogoImageUploader: f({ image: { maxFileSize: "1MB" } })
    .onUploadComplete(async () => {
      return { uploadedBy: "shannytech" };
    }),
  productImageUploader: f({ image: { maxFileSize: "1MB" } })
    .onUploadComplete(async () => {
      return { uploadedBy: "shannytech" };
    }),
};
