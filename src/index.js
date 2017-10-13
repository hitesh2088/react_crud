/**
 * @file Entry file for webpack to bundle into main.bundle.js and renders the outermost wrapper
 * component.
 */

import React from 'react';
import App from './app';
import store from './store';
import { addLocaleData, IntlProvider } from 'react-intl';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";


/**
 * User's locale.
 *
 * @type {string}
 */
const locale = process.env.LOCALE || 'en';

/**
 * Base locale.
 *
 * The base locale is the root of a locale (for instance: fr-BE, fr-CA
 * will have for base locale fr). The details of fr-BE will be contained
 * in the module imported from react-intl (see below).
 *
 * @type {string}
 */
const baseLocale = locale.split('-')[0] || 'en';

/**
 * Messages.
 *
 * @type {string}
 */
const messages = process.env.LOCALE_MESSAGES || {};

/**
 * Locale information.
 *
 * @type {Object}
 */
const localeData = require(`react-intl/locale-data/${baseLocale}`);
addLocaleData(localeData);


/**
 * Renders the application.
 *
 * @param {Object} appRootDomElement - the DOM node to attach the react
 *      application to.

exports.renderApplication = (appRootDomElement) => {
    render(
        <IntlProvider locale={ locale } messages={ messages }>
            <App />
        </IntlProvider>,
          document.getElementById('main'));
}; */


ReactDOM.render(
        <IntlProvider locale={ locale } messages={ messages }>
        <Provider store={store} >
            <App />
           </Provider> 
        </IntlProvider>,
  document.getElementById('main')
);

//window.timeSheet = exports.renderApplication;
