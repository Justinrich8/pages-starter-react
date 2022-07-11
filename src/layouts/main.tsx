import React, { FC } from 'react';
import { YextProvider } from '@yext/sites-react-components';
import { CustomFieldDebuggerReactProvider } from '@yext/custom-field-debugger';
import {
  TemplateProps,
} from "@yext/yext-sites-scripts";
import config from '../config';

const Main: FC<TemplateProps> = (props) => {
  return (
    <YextProvider value={config}>
      <CustomFieldDebuggerReactProvider component={Main} {...props}>
        {props.children}
      </CustomFieldDebuggerReactProvider>
    </YextProvider>
  )
}

export { Main };
