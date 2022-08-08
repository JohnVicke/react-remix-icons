import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionUnhappyFillProps = Omit<IconProps, "name">;

export const EmotionUnhappyFill = (props: EmotionUnhappyFillProps) => (
  <Icon name="emotion-unhappy-fill" {...props} />
);
