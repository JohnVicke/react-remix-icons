import React from "react";
import { Icon, IconProps } from "../Icon";

export type CloudyFillProps = Omit<IconProps, "name">;

export const CloudyFill = (props: CloudyFillProps) => (
  <Icon name="cloudy-fill" {...props} />
);
