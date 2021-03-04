import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff
} as Meta;

const callback = action("on or off clicked")

export const OnMode = () => <OnOff on={true} onChange={callback}/>;
export const OffMode = () => <OnOff on={false} onChange={callback}/>
export const ModeChanging = () => {
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    return <OnOff on={switchOn} onChange={setSwitchOn}/>
}