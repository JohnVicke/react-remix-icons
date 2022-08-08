import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBinLineProps = Omit<IconProps, "name">;

export const DeleteBinLine = (props: DeleteBinLineProps) => (
  <Icon name="delete-bin-line" {...props} />
);
