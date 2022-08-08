import React from "react";
import { Icon, IconProps } from "../Icon";

export type TrainWifiFillProps = Omit<IconProps, "name">;

export const TrainWifiFill = (props: TrainWifiFillProps) => (
  <Icon name="train-wifi-fill" {...props} />
);
