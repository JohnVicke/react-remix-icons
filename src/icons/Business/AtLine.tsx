import React from "react";
import { Icon, IconProps } from "../Icon";

export type AtLineProps = Omit<IconProps, "name">;

export const AtLine = (props: AtLineProps) => (
  <Icon name="at-line" {...props} />
);
