import React from "react";
import { Icon, IconProps } from "../Icon";

export type AddFillProps = Omit<IconProps, "name">;

export const AddFill = (props: AddFillProps) => (
  <Icon name="add-fill" {...props} />
);
