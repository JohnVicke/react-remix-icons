import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteRowProps = Omit<IconProps, "name">;

export const DeleteRow = (props: DeleteRowProps) => (
  <Icon name="delete-row" {...props} />
);
