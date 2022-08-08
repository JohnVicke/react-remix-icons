import React from "react";
import { Icon, IconProps } from "../Icon";

export type Loader5FillProps = Omit<IconProps, "name">;

export const Loader5Fill = (props: Loader5FillProps) => (
  <Icon name="loader-5-fill" {...props} />
);
