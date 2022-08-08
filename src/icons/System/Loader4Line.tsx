import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader4LineProps = Omit<IconProps, "name">;

export const Loader4Line = (props: Loader4LineProps) => (
  <Icon name="loader-4-line" {...props} />
);
