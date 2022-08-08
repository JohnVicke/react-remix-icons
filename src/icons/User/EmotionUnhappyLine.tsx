import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionUnhappyLineProps = Omit<IconProps, "name">;

export const EmotionUnhappyLine = (props: EmotionUnhappyLineProps) => (
  <Icon name="emotion-unhappy-line" {...props} />
);
