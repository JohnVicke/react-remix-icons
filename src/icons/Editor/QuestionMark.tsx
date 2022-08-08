import React from "react";
import { Icon, IconProps } from "../Icon";

export type QuestionMarkProps = Omit<IconProps, "name">;

export const QuestionMark = (props: QuestionMarkProps) => (
  <Icon name="question-mark" {...props} />
);
