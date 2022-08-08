import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeyLineProps = Omit<IconProps, "name">;

export const KeyLine = (props: KeyLineProps) => (
  <Icon name="key-line" {...props} />
);
