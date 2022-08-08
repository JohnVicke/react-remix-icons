import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkedinFillProps = Omit<IconProps, "name">;

export const LinkedinFill = (props: LinkedinFillProps) => (
  <Icon name="linkedin-fill" {...props} />
);
