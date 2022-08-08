import React from "react";
import { Icon, IconProps } from "../Icon";

export type PushpinFillProps = Omit<IconProps, "name">;

export const PushpinFill = (props: PushpinFillProps) => (
  <Icon name="pushpin-fill" {...props} />
);
