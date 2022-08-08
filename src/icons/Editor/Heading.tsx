import React from "react";
import { Icon, IconProps } from "../Icon";

export type HeadingProps = Omit<IconProps, "name">;

export const Heading = (props: HeadingProps) => (
  <Icon name="heading" {...props} />
);
