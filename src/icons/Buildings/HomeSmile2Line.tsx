import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeSmile2LineProps = Omit<IconProps, "name">;

export const HomeSmile2Line = (props: HomeSmile2LineProps) => (
  <Icon name="home-smile-2-line" {...props} />
);
