import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBinFillProps = Omit<IconProps, "name">;

export const DeleteBinFill = (props: DeleteBinFillProps) => (
  <Icon name="delete-bin-fill" {...props} />
);
