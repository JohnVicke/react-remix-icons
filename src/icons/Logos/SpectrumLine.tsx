import React from "react";
import { Icon, IconProps } from "../Icon";

export type SpectrumLineProps = Omit<IconProps, "name">;

export const SpectrumLine = (props: SpectrumLineProps) => (
  <Icon name="spectrum-line" {...props} />
);
