import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpectrumFillProps = Omit<IconProps, "name">;

export const SpectrumFill = (props: SpectrumFillProps) => (
  <Icon name="spectrum-fill" {...props} />
);
