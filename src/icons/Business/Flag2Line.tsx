import React from "react";
import { Icon, IconProps } from "../Icon";

export type Flag2LineProps = Omit<IconProps, "name">;

export const Flag2Line = (props: Flag2LineProps) => (
  <Icon name="flag-2-line" {...props} />
);
