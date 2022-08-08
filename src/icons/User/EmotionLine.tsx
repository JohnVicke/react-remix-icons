import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionLineProps = Omit<IconProps, "name">;

export const EmotionLine = (props: EmotionLineProps) => (
  <Icon name="emotion-line" {...props} />
);
