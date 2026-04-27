"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  endpoint = "",
}) {
  return (
    <div className="col-span-full">
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-50">
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="mt-4 flex items-center space-x-2 rounded-2xl bg-stone-950 px-4 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200">
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      <div className="overflow-hidden rounded-[1.25rem] border border-stone-200 bg-stone-50 ring-1 ring-stone-200 dark:border-stone-800 dark:bg-stone-900/70 dark:ring-stone-800">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Item image"
            width={1000}
            height={667}
            className="h-64 w-full object-contain bg-white p-3 dark:bg-stone-950/60"
          />
        ) : (
          <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);
              // Do something with the response
              toast.success("Image uploaded sucessfully");
              console.log("Files: ", res);
              console.log("Upload Completed");
            }}
            onUploadError={(error) => {
              // Do something with the error.
              toast.error("Try again Image upload failed");
              console.log(`ERROR! ${error.message}`,error);
            }}
          />
        )}
      </div>
    </div>
  );
}
