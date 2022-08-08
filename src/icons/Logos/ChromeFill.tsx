import React from "react";
import { Icon, IconProps } from "../Icon";

export type ChromeFillProps = Omit<IconProps, "name">;

export const ChromeFill = (props: ChromeFillProps) => (
  <Icon name="chrome-fill" {...props} />
);
