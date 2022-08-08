import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinkedinBoxFillProps = Omit<IconProps, "name">;

export const LinkedinBoxFill = (props: LinkedinBoxFillProps) => (
  <Icon name="linkedin-box-fill" {...props} />
);
