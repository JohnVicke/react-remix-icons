import React from "react";
import { Icon, IconProps } from "../Icon";

export type Key2LineProps = Omit<IconProps, "name">;

export const Key2Line = (props: Key2LineProps) => (
  <Icon name="key-2-line" {...props} />
);
