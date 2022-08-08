import React from "react";
import { Icon, IconProps } from "../Icon";

export type Radio2FillProps = Omit<IconProps, "name">;

export const Radio2Fill = (props: Radio2FillProps) => (
  <Icon name="radio-2-fill" {...props} />
);
