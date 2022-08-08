import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrainLineProps = Omit<IconProps, "name">;

export const TrainLine = (props: TrainLineProps) => (
  <Icon name="train-line" {...props} />
);
