import React from "react";
import { Icon, IconProps } from "../Icon";

export type DossierFillProps = Omit<IconProps, "name">;

export const DossierFill = (props: DossierFillProps) => (
  <Icon name="dossier-fill" {...props} />
);
