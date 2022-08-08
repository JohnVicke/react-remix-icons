import React from "react";
import { Icon, IconProps } from "../Icon";

export type FeedbackFillProps = Omit<IconProps, "name">;

export const FeedbackFill = (props: FeedbackFillProps) => (
  <Icon name="feedback-fill" {...props} />
);
