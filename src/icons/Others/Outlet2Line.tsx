import React from "react";
import { Icon, IconProps } from "../Icon";

export type Outlet2LineProps = Omit<IconProps, "name">;

export const Outlet2Line = (props: Outlet2LineProps) => (
  <Icon name="outlet-2-line" {...props} />
);
