import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrainFillProps = Omit<IconProps, "name">;

export const TrainFill = (props: TrainFillProps) => (
  <Icon name="train-fill" {...props} />
);
