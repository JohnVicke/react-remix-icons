import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin3FillProps = Omit<IconProps, "name">;

export const DeleteBin3Fill = (props: DeleteBin3FillProps) => (
  <Icon name="delete-bin-3-fill" {...props} />
);
