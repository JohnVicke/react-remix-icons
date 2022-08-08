import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkedinLineProps = Omit<IconProps, "name">;

export const LinkedinLine = (props: LinkedinLineProps) => (
  <Icon name="linkedin-line" {...props} />
);
