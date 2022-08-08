import React from "react";
import { Icon, IconProps } from "../Icon";

export type AddBoxFillProps = Omit<IconProps, "name">;

export const AddBoxFill = (props: AddBoxFillProps) => (
  <Icon name="add-box-fill" {...props} />
);
