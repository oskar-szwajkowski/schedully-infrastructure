import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ScheduleInfrastracture from '../lib/schedule-infrastracture-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ScheduleInfrastracture.ScheduleInfrastractureStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
