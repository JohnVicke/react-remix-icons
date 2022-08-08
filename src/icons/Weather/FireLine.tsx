import React from "react";
import { Icon, IconProps } from "../Icon";

export type FireLineProps = Omit<IconProps, "name">;

export const FireLine = (props: FireLineProps) => (
  <Icon name="fire-line" {...props} />
);
