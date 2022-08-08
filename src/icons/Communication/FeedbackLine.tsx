import React from "react";
import { Icon, IconProps } from "../Icon";

export type FeedbackLineProps = Omit<IconProps, "name">;

export const FeedbackLine = (props: FeedbackLineProps) => (
  <Icon name="feedback-line" {...props} />
);
