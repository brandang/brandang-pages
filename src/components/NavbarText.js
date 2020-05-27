import {LightTextTypography, GreyTextTypography} from "../CustomTheme";
import React from "react";

export default function NavbarText(props) {
    return (
        <div>
            {props.active ?
                <LightTextTypography variant={"body2"}>
                    {props.text}
                </LightTextTypography> :
                <GreyTextTypography variant={"body2"}>
                    {props.text}
                </GreyTextTypography>
            }
        </div>
    )
}