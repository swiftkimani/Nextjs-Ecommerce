"use client"
import FormHeader from '@/components/backOffice/FormHeader';
import ImageInput from '@/components/Forminput/Imageinput';
import SubmitButton from '@/components/Forminput/SubmitButton';
import TextareaInput from '@/components/Forminput/TexrAreainput';
import TextInput from '@/components/Forminput/Textinput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateUserCode } from "@/lib/generateUserCode";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function NewFarmer() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();


  async function onSubmit(data) {
    const code = generateUserCode( "SHT", data.name);
    data.code = code;
    makePostRequest(setLoading, "api/farmers", data, "Supplier", reset);
  }
  return (
    <div>
      <FormHeader title="New Supplier" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 ">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Supplier Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Phone"
            name="phone"
            type='tel'
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Email Address"
            name="email"
            type='email'
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Primary Contact"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Primary Contact Phone"
            name="contactPersonPhone"
            type='tel'
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Supplier Payment Terms"
            name="terms"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Supplier"
          loadingButtonTitle="Creating supplier please wait ..."
        />
      </form>
    </div>
  );
}
