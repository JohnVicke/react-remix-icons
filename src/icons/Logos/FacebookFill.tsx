import React from "react";
import { Icon, IconProps } from "../Icon";

export type FacebookFillProps = Omit<IconProps, "name">;

export const FacebookFill = (props: FacebookFillProps) => (
  <Icon name="facebook-fill" {...props} />
);
