import React from "react";
import { Icon, IconProps } from "../Icon";

export type Save3LineProps = Omit<IconProps, "name">;

export const Save3Line = (props: Save3LineProps) => (
  <Icon name="save-3-line" {...props} />
);
