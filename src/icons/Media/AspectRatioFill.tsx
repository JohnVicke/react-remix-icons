import React from "react";
import { Icon, IconProps } from "../Icon";

export type AspectRatioFillProps = Omit<IconProps, "name">;

export const AspectRatioFill = (props: AspectRatioFillProps) => (
  <Icon name="aspect-ratio-fill" {...props} />
);
