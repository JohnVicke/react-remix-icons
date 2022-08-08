import React from "react";
import { Icon, IconProps } from "../Icon";

export type Ghost2FillProps = Omit<IconProps, "name">;

export const Ghost2Fill = (props: Ghost2FillProps) => (
  <Icon name="ghost-2-fill" {...props} />
);
