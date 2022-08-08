import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader3LineProps = Omit<IconProps, "name">;

export const Loader3Line = (props: Loader3LineProps) => (
  <Icon name="loader-3-line" {...props} />
);
