import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader3FillProps = Omit<IconProps, "name">;

export const Loader3Fill = (props: Loader3FillProps) => (
  <Icon name="loader-3-fill" {...props} />
);
