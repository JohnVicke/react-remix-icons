import React from "react";
import { Icon, IconProps } from "../Icon";

export type BringToFrontProps = Omit<IconProps, "name">;

export const BringToFront = (props: BringToFrontProps) => (
  <Icon name="bring-to-front" {...props} />
);
