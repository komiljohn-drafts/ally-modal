import { valibotResolver } from "@hookform/resolvers/valibot";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import { useModalStore } from "@/store/useModalStore";
import { IChildren } from "@/utils/common-types";
import { Modals } from "@/utils/modals";

const stringSchema = (msg: string) => v.pipe(v.string(), v.trim(), v.nonEmpty(msg));
const websiteRegex = /^(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const ExperienceModalSchema = v.object({
  title: stringSchema("Please enter your title"),
  company: stringSchema("Please enter your company"),
  location: stringSchema("Please enter your location"),
  website: v.pipe(stringSchema("Please enter your url"), v.regex(websiteRegex, "Please enter valid url")),
  description: stringSchema("Please enter your description"),
  employment_type: stringSchema("Please select"),
  position: stringSchema("Please enter your position"),
});

type ExperienceModalFormType = v.InferOutput<typeof ExperienceModalSchema>;

export default function ExperienceModalFormWrapper({ children }: IChildren) {
  const { closeModal, setActiveModal, setModalData } = useModalStore();

  const methods = useForm<ExperienceModalFormType>({
    resolver: valibotResolver(ExperienceModalSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      website: "",
      description: "",
      employment_type: "",
      position: "",
    },
  });

  const onSubmit = (values: ExperienceModalFormType) => {
    closeModal();
    setActiveModal(Modals.SUCCESS_MODAL);
    setModalData(values);
  };

  const onInvalid = () => {
    //
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit, onInvalid)}>
        {children}
      </form>
    </FormProvider>
  );
}
