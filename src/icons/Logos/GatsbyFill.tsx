import React from "react";
import { Icon, IconProps } from "../Icon";

export type GatsbyFillProps = Omit<IconProps, "name">;

export const GatsbyFill = (props: GatsbyFillProps) => (
  <Icon name="gatsby-fill" {...props} />
);
