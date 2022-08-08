import React from "react";
import { Icon, IconProps } from "../Icon";

export type StoreLineProps = Omit<IconProps, "name">;

export const StoreLine = (props: StoreLineProps) => (
  <Icon name="store-line" {...props} />
);
