import React from "react";
import { Icon, IconProps } from "../Icon";

export type RefreshFillProps = Omit<IconProps, "name">;

export const RefreshFill = (props: RefreshFillProps) => (
  <Icon name="refresh-fill" {...props} />
);
