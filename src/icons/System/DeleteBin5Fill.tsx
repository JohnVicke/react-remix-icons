import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin5FillProps = Omit<IconProps, "name">;

export const DeleteBin5Fill = (props: DeleteBin5FillProps) => (
  <Icon name="delete-bin-5-fill" {...props} />
);
