import React from "react";
import { Icon, IconProps } from "../Icon";

export type FacebookBoxFillProps = Omit<IconProps, "name">;

export const FacebookBoxFill = (props: FacebookBoxFillProps) => (
  <Icon name="facebook-box-fill" {...props} />
);
