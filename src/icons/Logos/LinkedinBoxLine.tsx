import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkedinBoxLineProps = Omit<IconProps, "name">;

export const LinkedinBoxLine = (props: LinkedinBoxLineProps) => (
  <Icon name="linkedin-box-line" {...props} />
);
