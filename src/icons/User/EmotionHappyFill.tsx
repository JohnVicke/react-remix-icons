import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionHappyFillProps = Omit<IconProps, "name">;

export const EmotionHappyFill = (props: EmotionHappyFillProps) => (
  <Icon name="emotion-happy-fill" {...props} />
);
