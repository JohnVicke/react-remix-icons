import React from "react";
import { Icon, IconProps } from "../Icon";

export type Edit2LineProps = Omit<IconProps, "name">;

export const Edit2Line = (props: Edit2LineProps) => (
  <Icon name="edit-2-line" {...props} />
);
