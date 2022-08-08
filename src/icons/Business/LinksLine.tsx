import React from "react";
import { Icon, IconProps } from "../Icon";

export type LinksLineProps = Omit<IconProps, "name">;

export const LinksLine = (props: LinksLineProps) => (
  <Icon name="links-line" {...props} />
);
