import React from "react";
import { Icon, IconProps } from "../Icon";

export type Edit2FillProps = Omit<IconProps, "name">;

export const Edit2Fill = (props: Edit2FillProps) => (
  <Icon name="edit-2-fill" {...props} />
);
