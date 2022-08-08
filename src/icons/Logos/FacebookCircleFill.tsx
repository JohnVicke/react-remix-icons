import React from "react";
import { Icon, IconProps } from "../Icon";

export type FacebookCircleFillProps = Omit<IconProps, "name">;

export const FacebookCircleFill = (props: FacebookCircleFillProps) => (
  <Icon name="facebook-circle-fill" {...props} />
);
