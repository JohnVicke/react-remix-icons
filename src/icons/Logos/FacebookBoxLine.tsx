import React from "react";
import { Icon, IconProps } from "../Icon";

export type FacebookBoxLineProps = Omit<IconProps, "name">;

export const FacebookBoxLine = (props: FacebookBoxLineProps) => (
  <Icon name="facebook-box-line" {...props} />
);
