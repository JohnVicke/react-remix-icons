import React from "react";
import { Icon, IconProps } from "../Icon";

export type AddLineProps = Omit<IconProps, "name">;

export const AddLine = (props: AddLineProps) => (
  <Icon name="add-line" {...props} />
);
