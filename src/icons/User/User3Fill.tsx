import React from "react";
import { Icon, IconProps } from "../Icon";

export type User3FillProps = Omit<IconProps, "name">;

export const User3Fill = (props: User3FillProps) => (
  <Icon name="user-3-fill" {...props} />
);
