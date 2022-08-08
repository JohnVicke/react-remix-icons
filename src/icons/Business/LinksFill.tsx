import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinksFillProps = Omit<IconProps, "name">;

export const LinksFill = (props: LinksFillProps) => (
  <Icon name="links-fill" {...props} />
);
