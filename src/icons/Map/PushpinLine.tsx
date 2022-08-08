import React from "react";
import { Icon, IconProps } from "../Icon";

export type PushpinLineProps = Omit<IconProps, "name">;

export const PushpinLine = (props: PushpinLineProps) => (
  <Icon name="pushpin-line" {...props} />
);
