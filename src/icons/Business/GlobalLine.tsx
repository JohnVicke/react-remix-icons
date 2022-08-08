import React from "react";
import { Icon, IconProps } from "../Icon";

export type GlobalLineProps = Omit<IconProps, "name">;

export const GlobalLine = (props: GlobalLineProps) => (
  <Icon name="global-line" {...props} />
);
