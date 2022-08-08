import React from "react";
import { Icon, IconProps } from "../Icon";

export type GoogleLineProps = Omit<IconProps, "name">;

export const GoogleLine = (props: GoogleLineProps) => (
  <Icon name="google-line" {...props} />
);
