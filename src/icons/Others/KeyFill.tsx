import React from "react";
import { Icon, IconProps } from "../Icon";

export type KeyFillProps = Omit<IconProps, "name">;

export const KeyFill = (props: KeyFillProps) => (
  <Icon name="key-fill" {...props} />
);
