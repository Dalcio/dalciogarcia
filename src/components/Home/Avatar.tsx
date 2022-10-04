import { createStyles } from '@mantine/core';
import DalcioCharacter from './DalcioCharacter';
import VSCode from './VSCode';

const useAvatarService = createStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  vscode: {
    // position: 'absolute',
    position: 'fixed',
    width: `min(calc(100% - ${2 * theme.spacing.lg}px), 760px)`,
    // bottom: '-100px',
  },
  myVSCode: {},
  dalcioCharacter: {
    maxHeight: '180px',
    position: 'relative',
    zIndex: 1,
  },
}));

const Avatar = () => {
  const { classes } = useAvatarService();

  return (
    <div className={classes.container}>
      <DalcioCharacter className={classes.dalcioCharacter} />
    </div>
  );
};

export default Avatar;
