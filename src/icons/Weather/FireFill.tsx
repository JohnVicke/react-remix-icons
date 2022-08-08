import React from "react";
import { Icon, IconProps } from "../Icon";

export type FireFillProps = Omit<IconProps, "name">;

export const FireFill = (props: FireFillProps) => (
  <Icon name="fire-fill" {...props} />
);
