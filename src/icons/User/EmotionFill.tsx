import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionFillProps = Omit<IconProps, "name">;

export const EmotionFill = (props: EmotionFillProps) => (
  <Icon name="emotion-fill" {...props} />
);
