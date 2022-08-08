import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionHappyLineProps = Omit<IconProps, "name">;

export const EmotionHappyLine = (props: EmotionHappyLineProps) => (
  <Icon name="emotion-happy-line" {...props} />
);
