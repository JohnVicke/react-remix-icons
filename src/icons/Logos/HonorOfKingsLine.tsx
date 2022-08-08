import React from "react";
import { Icon, IconProps } from "../Icon";

export type HonorOfKingsLineProps = Omit<IconProps, "name">;

export const HonorOfKingsLine = (props: HonorOfKingsLineProps) => (
  <Icon name="honor-of-kings-line" {...props} />
);
