import React from "react";
import { Icon, IconProps } from "../Icon";

export type GenderlessFillProps = Omit<IconProps, "name">;

export const GenderlessFill = (props: GenderlessFillProps) => (
  <Icon name="genderless-fill" {...props} />
);
