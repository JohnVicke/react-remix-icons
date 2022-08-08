import React from "react";
import { Icon, IconProps } from "../Icon";

export type EBikeFillProps = Omit<IconProps, "name">;

export const EBikeFill = (props: EBikeFillProps) => (
  <Icon name="e-bike-fill" {...props} />
);
