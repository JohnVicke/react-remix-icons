import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin7FillProps = Omit<IconProps, "name">;

export const DeleteBin7Fill = (props: DeleteBin7FillProps) => (
  <Icon name="delete-bin-7-fill" {...props} />
);
