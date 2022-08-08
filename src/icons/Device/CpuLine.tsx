import React from "react";
import { Icon, IconProps } from "../Icon";

export type CpuLineProps = Omit<IconProps, "name">;

export const CpuLine = (props: CpuLineProps) => (
  <Icon name="cpu-line" {...props} />
);
