import React from "react";
import { Icon, IconProps } from "../Icon";

export type Outlet2FillProps = Omit<IconProps, "name">;

export const Outlet2Fill = (props: Outlet2FillProps) => (
  <Icon name="outlet-2-fill" {...props} />
);
