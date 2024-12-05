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
            className="flex space-x-2 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center">
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      <div className="dark:ring-white ring-black ring-1 rounded full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Item image"
            width={1000}
            height={667}
            className="w-full h-64 object-contain"
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
