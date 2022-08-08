import React from "react";
import { Icon, IconProps } from "../Icon";

export type CpuFillProps = Omit<IconProps, "name">;

export const CpuFill = (props: CpuFillProps) => (
  <Icon name="cpu-fill" {...props} />
);
