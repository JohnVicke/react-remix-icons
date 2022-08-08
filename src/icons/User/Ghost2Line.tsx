import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ghost2LineProps = Omit<IconProps, "name">;

export const Ghost2Line = (props: Ghost2LineProps) => (
  <Icon name="ghost-2-line" {...props} />
);
