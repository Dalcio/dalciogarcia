import { projects } from 'data';
import { useState } from 'react';

type PlatformsType = 'all' | 'web' | 'mobile' | 'others';

export const useWorks = () => {
  const [works, setWorks] = useState([...projects]);

  const handleWorks = (currentTab: PlatformsType) => {
    let newWorks: typeof projects;

    if (currentTab === 'all') {
      newWorks = [...projects];
    } else if (currentTab === 'mobile') {
      newWorks = projects.filter((p) => p.platform.toLowerCase() === 'mobile');
    } else if (currentTab === 'web') {
      newWorks = projects.filter((p) => p.platform.toLowerCase() === 'web');
    } else {
      newWorks = projects.filter(
        (p) => p.platform.toLowerCase() !== 'mobile' && p.platform.toLowerCase() !== 'web'
      );
    }

    setWorks([...newWorks]);
  };

  return { handleWorks, works };
};
