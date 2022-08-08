import React from "react";
import { Icon, IconProps } from "../Icon";

export type SurveyFillProps = Omit<IconProps, "name">;

export const SurveyFill = (props: SurveyFillProps) => (
  <Icon name="survey-fill" {...props} />
);
