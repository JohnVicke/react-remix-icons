import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteColumnProps = Omit<IconProps, "name">;

export const DeleteColumn = (props: DeleteColumnProps) => (
  <Icon name="delete-column" {...props} />
);
