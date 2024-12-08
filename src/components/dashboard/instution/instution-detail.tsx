'use client';

import * as React from 'react';
import { EngagementScoreProps } from '@/models/engagementScore';
import { InstutionDetailsInterface } from '@/models/InstutionDetails';
import { Stack } from '@mui/system';

import { EngagementScore } from '../common/engagement-score';

interface InstutionDetailsProps {
  instutionId: string;
}
export function InstutionDetails({ instutionId }: InstutionDetailsProps): React.JSX.Element {
  const defaultEngagementScoreProps: EngagementScoreProps = {
    score: '0', // default value
  };
  let [engagementScoreProps, SetEngagementScoreProps] =
    React.useState<EngagementScoreProps>(defaultEngagementScoreProps);
    
  return (
    <>
      <Stack>
        <EngagementScore score={engagementScoreProps?.score} />
      </Stack>
    </>
  );
}
