import { IPlayer } from '@/context/Player';

// type UpdateSelectedPlayerArgs = {
//   selected: number;
//   id: number;
// };

const usePlayerList = () => {
  const onGetPlayerlist = (): IPlayer[] => {
    return JSON.parse(window.localStorage.getItem('__players') ?? '[]');
  };

  const onSetPlayerlist = (playerlist: IPlayer[]) => {
    const stringPlayerlist = JSON.stringify(playerlist);
    window.localStorage.setItem('__players', stringPlayerlist);
  };

  // const updateSelectedPlayerlist = ({
  //   selected,
  //   id,
  // }: UpdateSelectedPlayerArgs) => updateSelectedPlayer({ selected, id });

  return {
    onGetPlayerlist,
    //   updateSelectedPlayerlist,
    onSetPlayerlist,
  };
};

export default usePlayerList;
