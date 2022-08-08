import React from "react";
import { Icon, IconProps } from "../Icon";

export type MacbookLineProps = Omit<IconProps, "name">;

export const MacbookLine = (props: MacbookLineProps) => (
  <Icon name="macbook-line" {...props} />
);
