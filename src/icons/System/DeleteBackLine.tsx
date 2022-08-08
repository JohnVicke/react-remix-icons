import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBackLineProps = Omit<IconProps, "name">;

export const DeleteBackLine = (props: DeleteBackLineProps) => (
  <Icon name="delete-back-line" {...props} />
);
