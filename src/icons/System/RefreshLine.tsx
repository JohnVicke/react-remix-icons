import React from "react";
import { Icon, IconProps } from "../Icon";

export type RefreshLineProps = Omit<IconProps, "name">;

export const RefreshLine = (props: RefreshLineProps) => (
  <Icon name="refresh-line" {...props} />
);
