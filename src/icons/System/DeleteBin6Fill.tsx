import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin6FillProps = Omit<IconProps, "name">;

export const DeleteBin6Fill = (props: DeleteBin6FillProps) => (
  <Icon name="delete-bin-6-fill" {...props} />
);
