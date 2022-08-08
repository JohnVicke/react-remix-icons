import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuestionnaireFillProps = Omit<IconProps, "name">;

export const QuestionnaireFill = (props: QuestionnaireFillProps) => (
  <Icon name="questionnaire-fill" {...props} />
);
