import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import type DocItemLayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import MarkCompleted from '@site/src/components/LearningProgress';
import {useLocation} from '@docusaurus/router';

type Props = WrapperProps<typeof DocItemLayoutType>;

export default function DocItemLayoutWrapper(props: Props): React.JSX.Element {
  const { pathname } = useLocation();
  const isLearningPath = pathname.startsWith('/learning-paths/');

  return (
    <>
      <DocItemLayout {...props} />
      {isLearningPath && <MarkCompleted moduleId={pathname} />}
    </>
  );
}
