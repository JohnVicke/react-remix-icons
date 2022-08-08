import React from "react";
import { Icon, IconProps } from "../Icon";

export type HomeSmile2FillProps = Omit<IconProps, "name">;

export const HomeSmile2Fill = (props: HomeSmile2FillProps) => (
  <Icon name="home-smile-2-fill" {...props} />
);
