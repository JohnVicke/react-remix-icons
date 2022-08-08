import React from "react";
import { Icon, IconProps } from "../Icon";

export type EditFillProps = Omit<IconProps, "name">;

export const EditFill = (props: EditFillProps) => (
  <Icon name="edit-fill" {...props} />
);
