#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ScheduleInfrastractureStack } from '../lib/schedule-infrastracture-stack';

const app = new cdk.App();
new ScheduleInfrastractureStack(app, 'ScheduleInfrastractureStack');
