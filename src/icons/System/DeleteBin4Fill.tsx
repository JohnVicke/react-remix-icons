import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin4FillProps = Omit<IconProps, "name">;

export const DeleteBin4Fill = (props: DeleteBin4FillProps) => (
  <Icon name="delete-bin-4-fill" {...props} />
);
