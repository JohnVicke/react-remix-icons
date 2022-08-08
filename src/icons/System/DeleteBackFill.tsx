import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBackFillProps = Omit<IconProps, "name">;

export const DeleteBackFill = (props: DeleteBackFillProps) => (
  <Icon name="delete-back-fill" {...props} />
);
