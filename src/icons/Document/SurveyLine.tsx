import React from "react";
import { Icon, IconProps } from "../Icon";

export type SurveyLineProps = Omit<IconProps, "name">;

export const SurveyLine = (props: SurveyLineProps) => (
  <Icon name="survey-line" {...props} />
);
