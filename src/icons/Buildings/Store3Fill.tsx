import React from "react";
import { Icon, IconProps } from "../Icon";

export type Store3FillProps = Omit<IconProps, "name">;

export const Store3Fill = (props: Store3FillProps) => (
  <Icon name="store-3-fill" {...props} />
);
