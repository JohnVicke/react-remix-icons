import React from "react";
import { Icon, IconProps } from "../Icon";

export type SurgicalMaskLineProps = Omit<IconProps, "name">;

export const SurgicalMaskLine = (props: SurgicalMaskLineProps) => (
  <Icon name="surgical-mask-line" {...props} />
);
