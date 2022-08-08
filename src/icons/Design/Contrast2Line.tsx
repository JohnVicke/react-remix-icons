import React from "react";
import { Icon, IconProps } from "../Icon";

export type Contrast2LineProps = Omit<IconProps, "name">;

export const Contrast2Line = (props: Contrast2LineProps) => (
  <Icon name="contrast-2-line" {...props} />
);
