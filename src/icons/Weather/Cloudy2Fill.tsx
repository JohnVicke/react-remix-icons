import React from "react";
import { Icon, IconProps } from "../Icon";

export type Cloudy2FillProps = Omit<IconProps, "name">;

export const Cloudy2Fill = (props: Cloudy2FillProps) => (
  <Icon name="cloudy-2-fill" {...props} />
);
