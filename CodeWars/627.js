function fight(robot1, robot2, tactics) {
   // Who robot will Rock 'em, Sock 'em?!

   let isDraw = false;

   if (robot1.tactics.length == 0 && robot2.tactics.length == 0) {
      return 'The fight was a draw.';
   } else if (robot1.tactics.length == 0) {
      return robot2.name + ' has won the fight.';
   } else if (robot2.tactics.length == 0) {
      return robot1.name + ' has won the fight.';
   }

   for (let i = 0; i < robot1.tactics.length; i++) {
      if ((robot1.speed > robot2.speed) || (robot1.speed == robot2.speed)) {

         robot2.health -= tactics[robot1.tactics[i]];

         if (robot2.health <= 0) {
            return robot1.name + ' has won the fight.';
         }

         robot1.health -= tactics[robot2.tactics[i]];

         if (robot1.health <= 0) {
            return robot2.name + ' has won the fight.';
         }

      }
   }
}