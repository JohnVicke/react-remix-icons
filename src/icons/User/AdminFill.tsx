import React from "react";
import { Icon, IconProps } from "../Icon";

export type AdminFillProps = Omit<IconProps, "name">;

export const AdminFill = (props: AdminFillProps) => (
  <Icon name="admin-fill" {...props} />
);
