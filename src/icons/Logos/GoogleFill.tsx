import React from "react";
import { Icon, IconProps } from "../Icon";

export type GoogleFillProps = Omit<IconProps, "name">;

export const GoogleFill = (props: GoogleFillProps) => (
  <Icon name="google-fill" {...props} />
);
