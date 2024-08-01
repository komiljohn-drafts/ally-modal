import React from "react";
import { twMerge } from "tailwind-merge";

import ComboInput from "../form-elements/combo-input";
import { FormPrefixInput } from "../form-elements/prefix-input";
import FormSelectInput from "../form-elements/select-input";
import { FormTextInput } from "../form-elements/text-input";

export default function ExperienceModalFormElements({ className }: { className?: string }) {
  return (
    <>
      <div
        className={twMerge(
          "embla__slide space-y-4 min-w-[100%] max-h-[500px] overflow-auto md:px-6 px-4 pb-px",
          className
        )}
      >
        <FormTextInput name="title" label="Title" placeholder="What is your title?" />
        <div className="flex gap-4 items-start sm:flex-row flex-col">
          <ComboInput
            className="sm:w-[47.5%] w-full"
            name="company"
            options={companyOptions}
            placeholder="Company"
            label="Company"
          />
          <FormPrefixInput
            className="max-sm:w-full"
            prefix="https://"
            label="Website"
            name="website"
            placeholder="www.example.com"
          />
        </div>
        <div className="flex gap-4 items-start sm:flex-row flex-col">
          <ComboInput
            className="sm:w-[47.5%] w-full"
            name="location"
            options={locationOptions}
            placeholder="Location"
            label="Location"
          />
          {/* on mobile screen this input is shown on the second slider, that's why I hid it and make the copy of it and put it outside the parent div */}
          <FormSelectInput
            className="max-sm:hidden"
            label="Employment"
            name="employment_type"
            options={employementOptions}
            placeholder="Employment type"
          />
        </div>
      </div>

      <div
        className={twMerge("embla__slide space-y-4 min-w-[100%] max-h-[500px] overflow-auto md:px-6 px-4", className)}
      >
        <FormSelectInput
          className="sm:hidden"
          label="Employment"
          name="employment_type"
          options={employementOptions}
          placeholder="Employment type"
        />
        <FormTextInput name="position" label="Position" placeholder="What is your position?" />
        <FormTextInput
          type="multiline"
          name="description"
          label="Description"
          placeholder="e.g. I joined Stripe's Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
        />
      </div>
    </>
  );
}

const locationOptions = Array.from({ length: 5 }, (_, idx) => ({
  name: `City ${idx + 1}`,
  id: `${idx + 1}`,
}));

const companyOptions = [
  {
    id: "1",
    name: "Untitled UI",
  },
  {
    id: "2",
    name: "Zoftify",
  },
  {
    id: "3",
    name: "Udevs",
  },
];
const employementOptions = [
  {
    id: "1",
    name: "Full time",
  },
  {
    id: "2",
    name: "Part time",
  },
  {
    id: "3",
    name: "Remote",
  },
];
