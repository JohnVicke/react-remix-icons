import React from "react";
import { Icon, IconProps } from "../Icon";

export type MoreFillProps = Omit<IconProps, "name">;

export const MoreFill = (props: MoreFillProps) => (
  <Icon name="more-fill" {...props} />
);
