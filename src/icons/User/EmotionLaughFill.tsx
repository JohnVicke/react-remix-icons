import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionLaughFillProps = Omit<IconProps, "name">;

export const EmotionLaughFill = (props: EmotionLaughFillProps) => (
  <Icon name="emotion-laugh-fill" {...props} />
);
