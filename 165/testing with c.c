#include <stdio.h>
#include <string.h>

#define MAX_WORDS 20
#define MAX_LENGTH 10

int main(void) {
    char words[MAX_WORDS][MAX_LENGTH];
    int frequencies[MAX_WORDS] = {0};
    int numWords;

    printf("Enter the number of words: ");
    scanf("%d", &numWords);

    printf("Enter the words: ");
    for (int i = 0; i < numWords; ++i) {
        scanf("%s", words[i]);
    }

    for (int i = 0; i < numWords; ++i) {
        int count = 1;
        if (frequencies[i] == 0) {
            for (int j = i + 1; j < numWords; ++j) {
                if (strcmp(words[i], words[j]) == 0) {
                    ++count;
                    frequencies[j] = -1; 
                }
            }
            frequencies[i] = count;
        }
    }


    printf("Word frequencies:\n");
    for (int i = 0; i < numWords; ++i) {
        if (frequencies[i] > 0) {
            printf("%s - %d\n", words[i], frequencies[i]);
        }
    }

    return 0;
}

