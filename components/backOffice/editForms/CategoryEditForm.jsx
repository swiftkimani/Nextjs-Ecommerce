"use client"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import TextInput from "@/components/Forminput/Textinput";
import TextareaInput from "@/components/Forminput/TexrAreainput";
import SelectInput from "@/components/Forminput/Selectinput";
import ImageInput from "@/components/Forminput/Imageinput";
import SubmitButton from "@/components/Forminput/SubmitButton";
import { makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";

export default function CategoryEditForm({ itemId, onClose }) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    async function load() {
      setFetching(true);
      try {
        const [categoryRes, marketsRes] = await Promise.all([
          fetch(`/api/categories/${itemId}`),
          fetch("/api/markets"),
        ]);
        const [category, marketsData] = await Promise.all([
          categoryRes.json(),
          marketsRes.json(),
        ]);
        setMarkets(Array.isArray(marketsData) ? marketsData : []);
        reset({
          title: category.title,
          description: category.description || "",
          marketIds: category.markets?.map((m) => m.id) || [],
        });
        setImageUrl(category.imageUrl || "");
      } finally {
        setFetching(false);
      }
    }
    load();
  }, [itemId, reset]);

  async function onSubmit(data) {
    data.slug = generateSlug(data.title);
    data.imageUrl = imageUrl;
    await makePutRequest(
      setLoading,
      `api/categories/${itemId}`,
      data,
      "Category",
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
          Category setup
        </p>
        <p className="mt-1.5 text-sm leading-6 text-stone-600 dark:text-stone-300">
          Updates to title will regenerate the slug. Select the markets this category appears in.
        </p>
      </div>
      <div className="grid gap-4">
        <TextInput
          label="Category Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select Markets"
          name="marketIds"
          register={register}
          errors={errors}
          className="w-full"
          options={markets}
          multiple={true}
        />
        <TextareaInput
          label="Category Description"
          name="description"
          register={register}
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="categoryimageUploader"
          label="Category Image"
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
