import React from "react";
import { Icon, IconProps } from "../Icon";

export type AdvertisementFillProps = Omit<IconProps, "name">;

export const AdvertisementFill = (props: AdvertisementFillProps) => (
  <Icon name="advertisement-fill" {...props} />
);
