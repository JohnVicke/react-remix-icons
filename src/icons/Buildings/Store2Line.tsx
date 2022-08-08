import React from "react";
import { Icon, IconProps } from "../Icon";

export type Store2LineProps = Omit<IconProps, "name">;

export const Store2Line = (props: Store2LineProps) => (
  <Icon name="store-2-line" {...props} />
);
