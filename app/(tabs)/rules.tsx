import { Fragment, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

enum Games {
  Baseball,
  Cricket,
  Elimination,
  Killer,
  X01,
}

const data: { game: keyof typeof Games }[] = [
  { game: 'Baseball' },
  { game: 'Cricket' },
  { game: 'Elimination' },
  { game: 'Killer' },
  { game: 'X01' },
];

export default function RulesScreen() {
  const [activeRule, setActiveRule] = useState<null | keyof typeof Games>(null);

  const onOpenRule = (rule: keyof typeof Games) => {
    setActiveRule((prev) => (prev === rule ? null : rule));
  };

  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Fragment key={item.game}>
            <Pressable onPress={() => onOpenRule(item.game)}>
              {item.game}
            </Pressable>
            {activeRule === item.game ? (
              <RulesDescription variant={item.game} />
            ) : (
              false
            )}
          </Fragment>
        );
      })}
    </View>
  );
}

const RulesDescription = ({ variant }: { variant: string }) => {
  switch (variant) {
    case 'Baseball':
      return <BaseBallRules />;
    case 'X01':
      return <X01Rules />;
    case 'Cricket':
      return <CricketRules />;
    case 'Elimination':
      return <EliminationRules />;
    case 'Killer':
      return <KillerRules />;
    default:
      return <Text>No rules</Text>;
  }
};

const X01Rules = () => {
  return (
    <>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Game Play:</Text> X01 is a
        tournament style game, where players start with X01 points and lower
        their score to exactly 0. First players have to define how many points
        they start with (typically 301 or 501) but can be any number of points
        the players want.
      </Text>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Scoring:</Text> This game can be
        played either by double-in and double-out or just double out. Players
        take turns throwing darts into the board, adding up their points based
        on their scores. Then they subtract that from the number of points they
        have remaining. In order to successfully win the game, players must hit
        their score exactly to 0 by hitting a double, once this happens the game
        is over and that player wins.
      </Text>
    </>
  );
};

const BaseBallRules = () => {
  return (
    <>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Game Play:</Text> Players each take
        turns throwing three darts, starting with the 1. Once all players have
        thrown at the 1, the start of the next round players will throw at the
        2. The game continues until all players have throw at the numbers 1
        through 9 (like innings in a baseball game). Scoring: As players throw
        at the numbers 1 - 9, scoring works as a single is 1, a double is 2, and
        a treble is 3. Players record their score, and whoever has the most
        points at the end of the game wins.
      </Text>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Note:</Text> As we play the game,
        there are a few exceptions. If a player successfully lands three darts
        in the number they are shooting for (single,double or treble), then that
        players hits a &quot; home run &quot; and darts are returned to hand and
        that player gets to re-shoot for that number. Also, once the 9th inning
        has been reached if there is a tie, then the tieing players go into
        &quot; extra innings &quot;. Gameplay is then continued onto the 10
        (maybe 11, 12, etc...) in a sudden death format. Both players shoot
        their 3 darts, and whoever has the most points, win.
      </Text>
    </>
  );
};

const CricketRules = () => {
  return (
    <>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Game Play:</Text> Players take
        turns throwing three darts at the board, hitting the numbers 15 through
        20; bulls-eye included. The game requires players to &quot;close&quot;
        the numbers by hitting them three times, once a player has all numbers
        &quot;closed&quot; the game ends. If a player hits a number outside of
        the 15 through 20 and bulls-eye then it doesn&apos;t have any effect to
        their score.
      </Text>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Scoring:</Text> If a player hits a
        single, it accounts for 1 mark on a number, a double counts as 2, and a
        treble counts as 3. Once a number has been &quot;closed&quot; by one
        player, it remains open for that player to score points on that number
        until all other players have &quot;closed&quot; the number. Ultimately
        the player who &quot;closes&quot; out all their numbers first win,
        unless another player has accumulated points (hit an open number more
        then three times). The game continues then until either the player
        without the numbers &quot;closed&quot;, closes their respective numbers
        or the player with all numbers &quot;closed&quot; accumulates more
        points.
      </Text>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Note:</Text> When it comes to the
        bulls-eye, a true bulls-eye is worth 2 of the 3 required marks for bull
        and a cow is worth 1 of the 3 required.
      </Text>
    </>
  );
};

const EliminationRules = () => {
  return (
    <Text style={styles.textBody}>
      <Text style={{ fontWeight: 'bold' }}>Game Play:</Text> Players alternate
      throwing 3 darts at the board trying to achieve the highest possible
      scoring hand. The next player must score higher then the player in front
      of them, if the throwing player fails to do that then they lose a life,
      but if they do successfully scores higer then they do not lose a life and
      the next player throws their darts. Typically games are played with a
      defined number of lives(we usually use 5). Game play continues until there
      is only one player left with lives.
    </Text>
  );
};

const KillerRules = () => {
  return (
    <>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Game Play:</Text> The game begins
        by players throwing darts into the board with their hand opposite for
        throwing. (If I was right-handed, I would use my left hand for this.) A
        players number is assigned with whatever number you successfully hit
        (doubles and trebles are excluded in this). Once all players have been
        &quot;assigned&quot; a number game play will begin with the player with
        the lowest number and counting up.
      </Text>
      <Text style={styles.textBody}>
        <Text style={{ fontWeight: 'bold' }}>Scoring:</Text> Players take turns
        shooting at their assigned numbers (singles are 1, doubles are 2,
        trebles are 3), players gain lives relative to the scoring. Once a
        player reaches 5 lives, they are classified as a &quot;Killer&quot;,
        once a player becomes a killer they begin then shooting towards other
        players numbers. If a player(s) is unsuccessful in hitting their number
        prior to a player becoming a killer they are eliminated from the game.
        There can be more then one killer at a time, and game play continues
        until there is only one player remaining.
      </Text>
      <Text style={styles.textBody}>
        A few additional notes: If a player has 4 lives and hits a double of
        their number, they in fact do not become a killer but instead they bring
        themself up to 5 then back down to 4 again. As such, if a player is a
        killer and they strike their own number instead of another player they
        bring their lives down equivilent to that score.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textBody: { paddingHorizontal: 15, fontSize: 18, width: '50%' },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
