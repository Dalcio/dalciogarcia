import { projects } from 'data';
import { useState } from 'react';

type PlatformsType = 'all' | 'web' | 'mobile' | 'others';

export const useWorks = (projectsToShowIdx?: number[]) => {
  const [works, setWorks] = useState([...projects]);

  const handleWorks = (currentTab: PlatformsType = 'all') => {
    const newWorks: typeof projects =
      currentTab === 'all'
        ? [...projects]
        : projects.filter((p) => p.platform.toLowerCase() === currentTab);

    setWorks([...newWorks]);
  };

  return {
    handleWorks,
    selectedProjects: !projectsToShowIdx ? works : projectsToShowIdx.map((p) => works[p]),
    projects: works,
  };
};
