import React from "react";
import { Icon, IconProps } from "../Icon";

export type SurgicalMaskFillProps = Omit<IconProps, "name">;

export const SurgicalMaskFill = (props: SurgicalMaskFillProps) => (
  <Icon name="surgical-mask-fill" {...props} />
);
