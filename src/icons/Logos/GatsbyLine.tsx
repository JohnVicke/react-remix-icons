import React from "react";
import { Icon, IconProps } from "../Icon";

export type GatsbyLineProps = Omit<IconProps, "name">;

export const GatsbyLine = (props: GatsbyLineProps) => (
  <Icon name="gatsby-line" {...props} />
);
