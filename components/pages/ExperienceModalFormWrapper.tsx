import { valibotResolver } from "@hookform/resolvers/valibot";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import { IChildren } from "@/utils/common-types";

const ExperienceModalSchema = v.object({
  title: v.pipe(v.string(), v.nonEmpty("Please enter your title")),
});

type ExperienceModalFormType = v.InferOutput<typeof ExperienceModalSchema>;

export default function ExperienceModalFormWrapper({ children }: IChildren) {
  const methods = useForm<ExperienceModalFormType>({
    resolver: valibotResolver(ExperienceModalSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
