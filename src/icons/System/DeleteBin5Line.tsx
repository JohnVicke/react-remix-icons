import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin5LineProps = Omit<IconProps, "name">;

export const DeleteBin5Line = (props: DeleteBin5LineProps) => (
  <Icon name="delete-bin-5-line" {...props} />
);
