import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionSadLineProps = Omit<IconProps, "name">;

export const EmotionSadLine = (props: EmotionSadLineProps) => (
  <Icon name="emotion-sad-line" {...props} />
);
