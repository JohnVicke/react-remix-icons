import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader5LineProps = Omit<IconProps, "name">;

export const Loader5Line = (props: Loader5LineProps) => (
  <Icon name="loader-5-line" {...props} />
);
