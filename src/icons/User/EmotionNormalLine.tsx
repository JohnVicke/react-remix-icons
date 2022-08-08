import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionNormalLineProps = Omit<IconProps, "name">;

export const EmotionNormalLine = (props: EmotionNormalLineProps) => (
  <Icon name="emotion-normal-line" {...props} />
);
