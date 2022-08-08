import React from "react";
import { Icon, IconProps } from "../Icon";

export type AddCircleLineProps = Omit<IconProps, "name">;

export const AddCircleLine = (props: AddCircleLineProps) => (
  <Icon name="add-circle-line" {...props} />
);
