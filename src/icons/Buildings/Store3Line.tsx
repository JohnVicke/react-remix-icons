import React from "react";
import { Icon, IconProps } from "../Icon";

export type Store3LineProps = Omit<IconProps, "name">;

export const Store3Line = (props: Store3LineProps) => (
  <Icon name="store-3-line" {...props} />
);
