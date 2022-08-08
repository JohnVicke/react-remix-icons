import React from "react";
import { Icon, IconProps } from "../Icon";

export type Key2FillProps = Omit<IconProps, "name">;

export const Key2Fill = (props: Key2FillProps) => (
  <Icon name="key-2-fill" {...props} />
);
