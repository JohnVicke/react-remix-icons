import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionNormalFillProps = Omit<IconProps, "name">;

export const EmotionNormalFill = (props: EmotionNormalFillProps) => (
  <Icon name="emotion-normal-fill" {...props} />
);
