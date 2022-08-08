import React from "react";
import { Icon, IconProps } from "../Icon";

export type EBike2FillProps = Omit<IconProps, "name">;

export const EBike2Fill = (props: EBike2FillProps) => (
  <Icon name="e-bike-2-fill" {...props} />
);
