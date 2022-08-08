import React from "react";
import { Icon, IconProps } from "../Icon";

export type EBikeLineProps = Omit<IconProps, "name">;

export const EBikeLine = (props: EBikeLineProps) => (
  <Icon name="e-bike-line" {...props} />
);
