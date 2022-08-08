import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin6LineProps = Omit<IconProps, "name">;

export const DeleteBin6Line = (props: DeleteBin6LineProps) => (
  <Icon name="delete-bin-6-line" {...props} />
);
