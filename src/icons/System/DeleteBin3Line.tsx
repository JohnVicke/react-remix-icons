import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin3LineProps = Omit<IconProps, "name">;

export const DeleteBin3Line = (props: DeleteBin3LineProps) => (
  <Icon name="delete-bin-3-line" {...props} />
);
