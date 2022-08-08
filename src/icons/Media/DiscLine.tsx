import React from "react";
import { Icon, IconProps } from "../Icon";

export type DiscLineProps = Omit<IconProps, "name">;

export const DiscLine = (props: DiscLineProps) => (
  <Icon name="disc-line" {...props} />
);
