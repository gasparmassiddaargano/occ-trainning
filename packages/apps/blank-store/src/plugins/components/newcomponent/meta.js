/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import {buildResources} from '@oracle-cx-commerce/resources/utils';
import * as resources from '../../../core/ui/locales';

const resourceKeys = ['helloWorld'];

export default {
  packageId: '@oracle-cx-commerce/blank-store',
  resources: buildResources(resources, resourceKeys)
};
