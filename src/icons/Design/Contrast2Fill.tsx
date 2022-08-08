import React from "react";
import { Icon, IconProps } from "../Icon";

export type Contrast2FillProps = Omit<IconProps, "name">;

export const Contrast2Fill = (props: Contrast2FillProps) => (
  <Icon name="contrast-2-fill" {...props} />
);
