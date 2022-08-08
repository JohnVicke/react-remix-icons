import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoreLineProps = Omit<IconProps, "name">;

export const MoreLine = (props: MoreLineProps) => (
  <Icon name="more-line" {...props} />
);
