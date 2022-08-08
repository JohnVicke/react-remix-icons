import React from "react";
import { Icon, IconProps } from "../Icon";

export type AspectRatioLineProps = Omit<IconProps, "name">;

export const AspectRatioLine = (props: AspectRatioLineProps) => (
  <Icon name="aspect-ratio-line" {...props} />
);
