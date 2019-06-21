import { I18nProvider, Plural, Trans } from '@lingui/react';
import React from 'react';
import { render } from 'react-dom';

import catalog from '../locale/en/messages.js';

const count = 2;

const View = () => (
  <I18nProvider language="en" catalogs={{ 'en-US': catalog }}>
    <ul>
      <li>
        <Trans id="trans1">
          This should be the 1st.
        </Trans>
      </li>
      <li>
        <Trans id="trans2">
          This should be the 1st of
          <Plural value={count} _0="zero" _1="one" _2="two" _3="three" other="#th" />
        </Trans>
      </li>
      <li>
        <Trans>Is this working?</Trans>
      </li>
    </ul>
  </I18nProvider>
)

render(<View />, document.body);
