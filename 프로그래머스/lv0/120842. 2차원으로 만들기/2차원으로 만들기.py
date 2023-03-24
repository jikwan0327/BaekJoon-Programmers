def solution(num_list, n):
    answer = [[0] * n for _ in range(int(len(num_list)/n))]
    for i in range(int(len(num_list)/n)):
        for j in range(0, n):
            answer[i][j] = num_list[i*n+j]
    return answer