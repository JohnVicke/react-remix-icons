import React from "react";
import { Icon, IconProps } from "../Icon";

export type AdminLineProps = Omit<IconProps, "name">;

export const AdminLine = (props: AdminLineProps) => (
  <Icon name="admin-line" {...props} />
);
