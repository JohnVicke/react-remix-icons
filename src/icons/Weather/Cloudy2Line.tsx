import React from "react";
import { Icon, IconProps } from "../Icon";

export type Cloudy2LineProps = Omit<IconProps, "name">;

export const Cloudy2Line = (props: Cloudy2LineProps) => (
  <Icon name="cloudy-2-line" {...props} />
);
