"use client"
import FormHeader from '@/components/backOffice/FormHeader';
import ImageInput from '@/components/Forminput/Imageinput';
import SelectInput from '@/components/Forminput/Selectinput';
import SubmitButton from '@/components/Forminput/SubmitButton';
import TextareaInput from '@/components/Forminput/TexrAreainput';
import TextInput from '@/components/Forminput/Textinput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateSlug } from '@/lib/generateSlug';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function NewCategory() {

  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const { register, reset, handleSubmit, formState: { errors } } = useForm()
  
  async function onSubmit(data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl

    makePostRequest(setLoading, "api/banners", data, "Banner", reset); 

    setImageUrl("")
  }
  return (
    <div className="space-y-5">
      <FormHeader title="New Banner" />
      <section className="rounded-[1.75rem] border border-stone-200/80 bg-white/90 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Banner setup
            </p>
            <h3 className="mt-2 font-titleFont text-2xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-50">
              Add a storefront campaign surface
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-600 dark:text-stone-300">
            Create a banner that stays visually consistent in both themes and can be deployed into storefront promotions immediately.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto my-3 w-full max-w-4xl rounded-[1.75rem] border border-stone-200/80 bg-white/95 p-5 shadow-[0_22px_70px_-48px_rgba(28,25,23,0.45)] dark:border-stone-800 dark:bg-stone-950/70 sm:p-6 md:p-8"
      >
        <div className="mb-6 rounded-[1.25rem] border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/60">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            Creative note
          </p>
          <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
            Use short titles, clean destination links, and a strong hero image so the banner feels premium in both light and dark storefront contexts.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Banner Link"
            name="link"
            type='url'
            register={register}
            errors={errors}
          />
          {/* configure endpoint of image in core js */}
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader"
            label="Banner Image"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Banner"
          loadingButtonTitle="Creating Banner please wait"
        />
      </form>
    </div>
  );
}
