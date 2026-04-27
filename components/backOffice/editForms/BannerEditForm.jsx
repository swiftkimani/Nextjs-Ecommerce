"use client"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import TextInput from "@/components/Forminput/Textinput";
import ImageInput from "@/components/Forminput/Imageinput";
import SubmitButton from "@/components/Forminput/SubmitButton";
import { makePutRequest } from "@/lib/apiRequest";

export default function BannerEditForm({ itemId, onClose }) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    async function load() {
      setFetching(true);
      try {
        const res = await fetch(`/api/banners/${itemId}`);
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        reset({
          title: data.title,
          link: data.link,
          description: data.description || "",
        });
        setImageUrl(data.imageUrl || "");
      } finally {
        setFetching(false);
      }
    }
    load();
  }, [itemId, reset]);

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    await makePutRequest(
      setLoading,
      `api/banners/${itemId}`,
      data,
      "Banner",
      () => { onClose(); router.refresh(); },
      () => {}
    );
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-stone-400" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/60">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
          Creative note
        </p>
        <p className="mt-1.5 text-sm leading-6 text-stone-600 dark:text-stone-300">
          Use short titles, clean destination links, and a strong hero image.
        </p>
      </div>
      <div className="grid gap-4">
        <TextInput
          label="Banner Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Banner Link"
          name="link"
          type="url"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Description"
          name="description"
          register={register}
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="bannerImageUploader"
          label="Banner Image"
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle="Save Changes"
        loadingButtonTitle="Saving changes..."
      />
    </form>
  );
}
