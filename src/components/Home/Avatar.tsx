import { createStyles } from '@mantine/core';
import DalcioCharacter from './DalcioCharacter';

const useAvatarService = createStyles((theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
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
