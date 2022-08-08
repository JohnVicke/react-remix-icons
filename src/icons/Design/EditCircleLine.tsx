import React from "react";
import { Icon, IconProps } from "../Icon";

export type EditCircleLineProps = Omit<IconProps, "name">;

export const EditCircleLine = (props: EditCircleLineProps) => (
  <Icon name="edit-circle-line" {...props} />
);
