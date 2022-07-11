import React, { FC } from 'react';
import { YextProvider } from '@yext/sites-react-components';
import { CustomFieldDebuggerReactProvider } from '@yext/custom-field-debugger';
import {
  TemplateProps,
} from "@yext/yext-sites-scripts";
import config from '../config';

interface MainProps extends TemplateProps {
  component: React.FC<TemplateProps>;
}

const Main: FC<MainProps> = (props) => {
  return (
    <YextProvider value={config}>
      <CustomFieldDebuggerReactProvider {...props}>
        {props.children}
      </CustomFieldDebuggerReactProvider>
    </YextProvider>
  )
}

export { Main };
