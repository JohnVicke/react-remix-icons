import React from "react";
import { Icon, IconProps } from "../Icon";

export type DeleteBin2LineProps = Omit<IconProps, "name">;

export const DeleteBin2Line = (props: DeleteBin2LineProps) => (
  <Icon name="delete-bin-2-line" {...props} />
);
