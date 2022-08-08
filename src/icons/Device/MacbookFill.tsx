import React from "react";
import { Icon, IconProps } from "../Icon";

export type MacbookFillProps = Omit<IconProps, "name">;

export const MacbookFill = (props: MacbookFillProps) => (
  <Icon name="macbook-fill" {...props} />
);
