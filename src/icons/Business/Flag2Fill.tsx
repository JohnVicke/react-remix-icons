import React from "react";
import { Icon, IconProps } from "../Icon";

export type Flag2FillProps = Omit<IconProps, "name">;

export const Flag2Fill = (props: Flag2FillProps) => (
  <Icon name="flag-2-fill" {...props} />
);
