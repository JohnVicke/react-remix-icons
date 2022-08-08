import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bug2LineProps = Omit<IconProps, "name">;

export const Bug2Line = (props: Bug2LineProps) => (
  <Icon name="bug-2-line" {...props} />
);
