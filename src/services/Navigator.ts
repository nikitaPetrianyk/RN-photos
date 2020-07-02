import * as React from "react";
import { IPhoto } from "../models/Image";

export const navigationRef = React.createRef<any>();

export const navigate = (name: string, params: IPhoto) => {
  navigationRef.current.navigate(name, params);
};
