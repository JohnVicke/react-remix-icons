import React from "react";
import { Icon, IconProps } from "../Icon";

export type Bug2FillProps = Omit<IconProps, "name">;

export const Bug2Fill = (props: Bug2FillProps) => (
  <Icon name="bug-2-fill" {...props} />
);
