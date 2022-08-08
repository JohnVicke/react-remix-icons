import React from "react";
import { Icon, IconProps } from "../Icon";

export type EBike2LineProps = Omit<IconProps, "name">;

export const EBike2Line = (props: EBike2LineProps) => (
  <Icon name="e-bike-2-line" {...props} />
);
