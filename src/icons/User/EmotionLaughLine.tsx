import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionLaughLineProps = Omit<IconProps, "name">;

export const EmotionLaughLine = (props: EmotionLaughLineProps) => (
  <Icon name="emotion-laugh-line" {...props} />
);
