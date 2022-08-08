import React from "react";
import { Icon, IconProps } from "../Icon";

export type FacebookLineProps = Omit<IconProps, "name">;

export const FacebookLine = (props: FacebookLineProps) => (
  <Icon name="facebook-line" {...props} />
);
