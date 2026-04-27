"use client"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import TextInput from "@/components/Forminput/Textinput";
import TextareaInput from "@/components/Forminput/TexrAreainput";
import SelectInput from "@/components/Forminput/Selectinput";
import ImageInput from "@/components/Forminput/Imageinput";
import Arrayitemsinput from "@/components/Forminput/Arrayitemsinput";
import SubmitButton from "@/components/Forminput/SubmitButton";
import { makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";

export default function ProductEditForm({ itemId, onClose }) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    async function load() {
      setFetching(true);
      try {
        const [productRes, categoriesRes, farmersRes] = await Promise.all([
          fetch(`/api/products/${itemId}`),
          fetch("/api/categories"),
          fetch("/api/farmers"),
        ]);
        const [product, categoriesData, farmersData] = await Promise.all([
          productRes.json(),
          categoriesRes.json(),
          farmersRes.json(),
        ]);

        setCategories(
          Array.isArray(categoriesData)
            ? categoriesData.map((c) => ({ id: c.id, title: c.title }))
            : []
        );
        setFarmers(
          Array.isArray(farmersData)
            ? farmersData.map((f) => ({ id: f.id, title: f.name }))
            : []
        );
        setTags(Array.isArray(product.tags) ? product.tags : []);
        setImageUrl(product.imageUrl || "");

        reset({
          title: product.title,
          sku: product.sku || "",
          barcode: product.barcode || "",
          productPrice: product.productPrice ? String(product.productPrice) : "",
          salePrice: product.salePrice ? String(product.salePrice) : "",
          categoryId: product.categoryId || "",
          farmerId: product.farmerId || "",
          description: product.description || "",
        });
      } finally {
        setFetching(false);
      }
    }
    load();
  }, [itemId, reset]);

  async function onSubmit(data) {
    data.slug = generateSlug(data.title);
    data.imageUrl = imageUrl;
    data.tags = tags;
    await makePutRequest(
      setLoading,
      `api/products/${itemId}`,
      data,
      "Product",
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
          Product record
        </p>
        <p className="mt-1.5 text-sm leading-6 text-stone-600 dark:text-stone-300">
          Changes are applied immediately to the live catalog on save.
        </p>
      </div>
      <div className="grid gap-4">
        <TextInput
          label="Product Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="SKU"
          name="sku"
          register={register}
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        <TextInput
          label="Barcode"
          name="barcode"
          register={register}
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        <TextInput
          label="Price (Before Discount)"
          name="productPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Sale Price (Discounted)"
          name="salePrice"
          type="number"
          register={register}
          errors={errors}
          isRequired={false}
          className="w-full"
        />
        <SelectInput
          label="Category"
          name="categoryId"
          register={register}
          errors={errors}
          className="w-full"
          options={categories}
        />
        <SelectInput
          label="Supplier"
          name="farmerId"
          register={register}
          errors={errors}
          className="w-full"
          options={farmers}
        />
        <TextareaInput
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
          endpoint="productImageUploader"
          label="Product Image"
        />
        <Arrayitemsinput
          itemTitle="Tag"
          items={tags}
          setItems={setTags}
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
