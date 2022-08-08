import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin2FillProps = Omit<IconProps, "name">;

export const DeleteBin2Fill = (props: DeleteBin2FillProps) => (
  <Icon name="delete-bin-2-fill" {...props} />
);
