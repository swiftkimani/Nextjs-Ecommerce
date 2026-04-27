"use client"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import TextInput from "@/components/Forminput/Textinput";
import SubmitButton from "@/components/Forminput/SubmitButton";
import { makePutRequest } from "@/lib/apiRequest";

export default function CouponEditForm({ itemId, onClose }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    async function load() {
      setFetching(true);
      try {
        const res = await fetch(`/api/coupons/${itemId}`);
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        reset({
          title: data.title,
          couponCode: data.couponCode,
          expiryDate: data.expiryDate?.slice(0, 10) || "",
        });
        setIsActive(data.isActive ?? true);
      } finally {
        setFetching(false);
      }
    }
    load();
  }, [itemId, reset]);

  async function onSubmit(data) {
    data.isActive = isActive;
    await makePutRequest(
      setLoading,
      `api/coupons/${itemId}`,
      data,
      "Coupon",
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
          Coupon details
        </p>
        <p className="mt-1.5 text-sm leading-6 text-stone-600 dark:text-stone-300">
          The coupon code is editable but must remain unique across all promotions.
        </p>
      </div>
      <div className="grid gap-4">
        <TextInput
          label="Coupon Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Coupon Code"
          name="couponCode"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Expiry Date"
          name="expiryDate"
          type="date"
          register={register}
          errors={errors}
          className="w-full"
        />
        <div className="flex items-center gap-3 rounded-[1.25rem] border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/60">
          <button
            type="button"
            onClick={() => setIsActive((prev) => !prev)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
              isActive ? "bg-stone-950 dark:bg-stone-100" : "bg-stone-200 dark:bg-stone-700"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition-transform duration-200 dark:bg-stone-950 ${
                isActive ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <div>
            <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
              {isActive ? "Active" : "Inactive"}
            </p>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {isActive ? "Coupon is live and redeemable" : "Coupon is disabled and hidden"}
            </p>
          </div>
        </div>
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle="Save Changes"
        loadingButtonTitle="Saving changes..."
      />
    </form>
  );
}
