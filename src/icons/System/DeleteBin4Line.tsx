import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin4LineProps = Omit<IconProps, "name">;

export const DeleteBin4Line = (props: DeleteBin4LineProps) => (
  <Icon name="delete-bin-4-line" {...props} />
);
