#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>


typedef struct _player {	//플레이어 구조체 
	int money;
	int stock[8];
} Player;

void gotoxy(int x,int y) {
	COORD pos={x,y};
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), pos); 
}


void clear() {                                                                                                                                                           
	gotoxy(20,10);
	printf("                                                                                                               ");
	gotoxy(20,10);
}

int main() {
	int p_n, c_n, cnt, key, g = 0, p;
	clear();
	printf("플레이어 수를 입력하세요 : ");
	scanf("%d",&p);
	Player *players = malloc(sizeof(Player) * p);
	for(int i = 0; i < p; i++) {
		players[i].money = 0;
		for(int j = 0; j < 8; j++) {
			players[i].stock[j] = 0;
		}
	}
	for(int i = 0; i < p; i++) {
		players[i].money = 300000;
		for(int j = 0; j < 8; j++) {
			players[i].stock[j] = 0;
		}
	}															  //금리 
	int P_O_S[6][11] = {{100000,50000,20000,10000,30000,5000,5000,0,0,0,0},
						{150000,100000,25000,14000,60000,15000,25000,0,0,0,0},
						{200000,60000,25000,7000,90000,20000,50000,150000,0,0,0},
						{0,48000,25000,6300,100000,25000,60000,180000,0,0,0},
						{0,40000,20000,6000,60000,20000,54000,200000,40000,20000,30000},
						{50000,15000,5000,70000,25000,50000,260000,120000,200000,60000}};
	while(1) {
		if (g == 6) {
			break;
		}
		gotoxy(110,0);
		printf("%d",g+1);
		clear();
		printf("라운드가 변했다면 1을 변하지 않았다면 0을 입력해주세요 : ");
		scanf("%d",&key);
		if(key == 1) {
			g++;
		}
		else {
			gotoxy(80,20);
			printf("종료를 원한다면 0을 입력하세요"); 
			clear();
			printf("플레이어의 번호를 입력하세요(1~%d) : ",p);
			scanf("%d",&p_n);
			if(p_n == 0) {
				break;
			}
			clear();
			printf("%d번째 플레이어의 주식을 보고 싶으시다면 1을 입력해주세요 : ", p_n);
			scanf("%d", &key);
			if(key == 1) {
				clear();
				gotoxy(50,10);
				for(int i = 0; i < 8; i++) {
					printf("%d ", players[p_n-1].stock[i]);
				}
				gotoxy(40,15);
				printf("%d번째 플레이어의 잔액은 %d원입니다.",p_n,players[p_n-1].money);
				Sleep(2000);
				gotoxy(40,15);
				printf("                                                                       ");
			}
			else {
				clear();
				printf("회사번호를 입력하세요(1~11) : ");
				scanf("%d",&c_n);
				if(c_n == 0) {
					break;
				}
				clear();
				printf("매수를 원한다면 n, 매도를 원한다면 -n을 입력해주세요 : ");
				scanf("%d", &cnt);
				if(cnt < 0) {
					if(players[p_n-1].stock[c_n-1] < -1*cnt) {
						clear();
						printf("주식이 부족합니다");
						Sleep(1000);
					}
					else {
						players[p_n-1].stock[c_n-1] += cnt;
					}
				}
				else if(cnt > 0) {
					if(players[p_n-1].money < cnt * P_O_S[g][c_n-1]) {
						clear();
						printf("잔고가 부족합니다. 최대 구입 가능 주식 : %d", players[p_n-1].money/P_O_S[g][c_n-1]);
						Sleep(1000);
					}
					else {
						players[p_n-1].money -= cnt * P_O_S[g][c_n-1];
						players[p_n-1].stock[c_n-1] += cnt;
					}
				}
				else {
					break;
				}	
			}
		}
	}
	system("cls");
	gotoxy(20,10);
	for(int i = 0; i < p; i++) {
		for(int j = 0; j < 8; j++) {
			players[i].money += P_O_S[g][j] * players[i].stock[j];
		}
		printf("%d ",players[i].money);
	}
	
	
	return 0;
}
