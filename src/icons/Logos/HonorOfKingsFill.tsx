import React from "react";
import { Icon, IconProps } from "../Icon";

export type HonorOfKingsFillProps = Omit<IconProps, "name">;

export const HonorOfKingsFill = (props: HonorOfKingsFillProps) => (
  <Icon name="honor-of-kings-fill" {...props} />
);
