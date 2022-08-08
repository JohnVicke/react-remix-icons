import React from "react";
import { Icon, IconProps } from "../Icon";

export type Store2FillProps = Omit<IconProps, "name">;

export const Store2Fill = (props: Store2FillProps) => (
  <Icon name="store-2-fill" {...props} />
);
