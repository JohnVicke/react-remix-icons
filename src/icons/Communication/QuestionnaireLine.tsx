import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuestionnaireLineProps = Omit<IconProps, "name">;

export const QuestionnaireLine = (props: QuestionnaireLineProps) => (
  <Icon name="questionnaire-line" {...props} />
);
