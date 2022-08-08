import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader4FillProps = Omit<IconProps, "name">;

export const Loader4Fill = (props: Loader4FillProps) => (
  <Icon name="loader-4-fill" {...props} />
);
