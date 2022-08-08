import React from "react";
import { Icon, IconProps } from "../Icon";

export type AddBoxLineProps = Omit<IconProps, "name">;

export const AddBoxLine = (props: AddBoxLineProps) => (
  <Icon name="add-box-line" {...props} />
);
