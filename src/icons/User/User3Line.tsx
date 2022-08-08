import React from "react";
import { Icon, IconProps } from "../Icon";

export type User3LineProps = Omit<IconProps, "name">;

export const User3Line = (props: User3LineProps) => (
  <Icon name="user-3-line" {...props} />
);
