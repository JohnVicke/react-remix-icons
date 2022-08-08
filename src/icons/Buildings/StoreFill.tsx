import React from "react";
import { Icon, IconProps } from "../Icon";

export type StoreFillProps = Omit<IconProps, "name">;

export const StoreFill = (props: StoreFillProps) => (
  <Icon name="store-fill" {...props} />
);
