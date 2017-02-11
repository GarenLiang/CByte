/*
Have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer 
output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a 
system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, 
then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25,
then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 

*/

function CoinDeterminer(num, x = 0, coin = [11, 9, 7, 5, 1]) { 
	if (num === 0) {
		return x;
	}
	
	if (coin[0] > num) {
		return CoinDeterminer(num, x, coin.slice(1));
	}
	
	if (num >= coin[0] * 2 || num % coin[0] === 0) {
		return CoinDeterminer(num - coin[0], x + 1, coin);
	}
	
	return Math.min(CoinDeterminer(num - coin[0], x + 1, coin), 
		CoinDeterminer(num, x, coin.slice(1)));
}
   
CoinDeterminer(readline());
