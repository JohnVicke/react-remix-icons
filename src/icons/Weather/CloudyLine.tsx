import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudyLineProps = Omit<IconProps, "name">;

export const CloudyLine = (props: CloudyLineProps) => (
  <Icon name="cloudy-line" {...props} />
);
