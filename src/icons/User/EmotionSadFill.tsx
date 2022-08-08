import React from "react";
import { Icon, IconProps } from "../Icon";

export type EmotionSadFillProps = Omit<IconProps, "name">;

export const EmotionSadFill = (props: EmotionSadFillProps) => (
  <Icon name="emotion-sad-fill" {...props} />
);
