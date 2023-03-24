# def solution(num_list, n):
#     answer = []
#     for i in range(int(len(num_list)/n)):
#         for j in range(0, n):
#             answer[i][j] = num_list[i*n+j]
#     return answer

import numpy as np
def solution(num_list, n):
    answer = []
    a = np.array(num_list).reshape(int(len(num_list)/n), n)
    answer = a
    return answer.tolist()